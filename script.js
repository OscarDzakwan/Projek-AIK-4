// script.js — logika aplikasi Sholatku (SPA hash router, tanpa build tool)

const app = document.getElementById("app");
const body = document.body;

const POSE_EMOJI = {
  berdiri: "🧍",
  takbir: "🙌",
  sedekap: "🤲",
  rukuk: "🙇",
  itidal: "🧍",
  sujud: "🛐",
  duduk: "🧎",
  salam: "🤝",
};

let state = {
  mode: localStorage.getItem("sholatku_mode") || "dewasa", // 'dewasa' | 'anak'
  listTab: "dewasa", // tab aktif di Daftar Gerakan (independen dari mode header)
  detailTab: "bacaan", // tab aktif di Detail Gerakan: bacaan | video | penjelasan
  autoplay: false, // status autoplay (persist antar gerakan)
};

/* ===================== MODE (Dewasa / Anak-anak) ===================== */
function applyMode(mode) {
  state.mode = mode;
  body.setAttribute("data-mode", mode);
  document.getElementById("modeLabel").textContent =
    mode === "dewasa" ? "Dewasa" : "Anak-anak";
  localStorage.setItem("sholatku_mode", mode);
  renderModeMenu();
}
function renderModeMenu() {
  const menu = document.getElementById("modeMenu");
  const other = state.mode === "dewasa" ? "anak" : "dewasa";
  const otherLabel = other === "dewasa" ? "Dewasa" : "Anak-anak";
  const currentLabel = state.mode === "dewasa" ? "Dewasa" : "Anak-anak";
  menu.innerHTML = `
    <button class="mode-option" data-mode="${state.mode}">${currentLabel}</button>
    <button class="mode-option" data-mode="${other}">${otherLabel}</button>
  `;
  menu.querySelectorAll(".mode-option").forEach((btn) => {
    btn.addEventListener("click", () => {
      applyMode(btn.dataset.mode);
      menu.classList.remove("open");
    });
  });
}
document.getElementById("modeBtn").addEventListener("click", (e) => {
  e.stopPropagation();
  document.getElementById("modeMenu").classList.toggle("open");
});
document.addEventListener("click", () =>
  document.getElementById("modeMenu").classList.remove("open"),
);

/* ===================== ROUTER ===================== */
function parseRoute() {
  const hash = location.hash.replace(/^#/, "") || "/";
  const parts = hash.split("/").filter(Boolean);
  if (parts.length === 0) return { name: "beranda" };
  if (parts[0] === "gerakan" && parts.length === 1) return { name: "daftar" };
  if (parts[0] === "gerakan" && parts.length === 2)
    return { name: "detail", id: parseInt(parts[1], 10) };
  return { name: "beranda" };
}

function navigate() {
  const route = parseRoute();
  if (route.name !== "detail" && state.autoplay) {
    stopAutoplay();
  }
  document
    .querySelectorAll(".nav-link")
    .forEach((l) => l.classList.remove("active"));
  if (route.name === "beranda") {
    document.querySelector('[data-route="/"]').classList.add("active");
    renderBeranda();
  } else if (route.name === "daftar") {
    document.querySelector('[data-route="/gerakan"]').classList.add("active");
    renderDaftar();
  } else if (route.name === "detail") {
    document.querySelector('[data-route="/gerakan"]').classList.add("active");
    state.detailTab = "bacaan";
    renderDetail(route.id);
  }
  window.scrollTo(0, 0);
}
window.addEventListener("hashchange", navigate);

/* ===================== BERANDA ===================== */
function renderBeranda() {
  const isAnak = state.mode === "anak";
  app.innerHTML = `
    <section class="hero ${isAnak ? "" : "hero--dewasa"}">
      <div class="hero-inner">
        <div>
          <h1>Belajar <span class="accent">Sholat</span><br>Sesuai Sunnah<br>Rasulullah</h1>
          <p>Panduan lengkap gerakan dan bacaan sholat berdasarkan Himpunan Putusan Tarjih Muhammadiyah.</p>
          <a href="#/gerakan" class="cta-btn">Mulai Belajar <span>→</span></a>
        </div>
        <div class="hero-figure">
          ${
            isAnak
              ? `
            <img src="assets/images/Bersedekap anak beranda.png" alt="Anak Sholat Bersedekap" class="hero-person">
            <img src="assets/images/Jendela Beranda Anak.png" alt="Jendela masjid anak" class="mosque-frame-img">
          `
              : `
            <img src="assets/images/Bersedekap beranda.png" alt="Gerakan Takbiratul Ihram" class="hero-person">
            <img src="assets/images/Jendela_Beranda_Dewasa.png" alt="Jendela masjid" class="mosque-frame-img">
          `
          }
        </div>
      </div>
    </section>
  `;
}

/* ===================== DAFTAR GERAKAN ===================== */
function sidebarHtml(activeRoute) {
  return `
    <aside class="sidebar">
      <a href="#/" class="side-link ${activeRoute === "beranda" ? "active" : ""}">🏠 Beranda</a>
      <a href="#/gerakan" class="side-link ${activeRoute !== "beranda" ? "active" : ""}">📖 Daftar Gerakan</a>
      <div class="side-quote">
        <div class="arabic">إِنِّيْ أَنَا اللّٰهُ لَآ إِلَٰهَ إِلَّآ أَنَا۠ فَاعْبُدْنِيْ وَأَقِمِ الصَّلَاةَ لِذِكْرِيْ</div>
        <p>Sesungguhnya Aku adalah Allah, tidak ada tuhan selain Aku. Maka, sembahlah Aku dan tegakkanlah salat untuk mengingat-Ku. (QS. Thaha: 14)</p>
      </div>
    </aside>
  `;
}

function renderDaftar() {
  app.innerHTML = `
    <div class="layout">
      ${sidebarHtml("daftar")}
      <div class="content">
        <h1>Daftar Gerakan Sholat</h1>
        <p class="subtitle">Pelajari setiap gerakan sholat secara berurutan</p>
        <div class="tabs">
          <button class="tab-btn ${state.listTab === "dewasa" ? "active" : ""}" data-tab="dewasa">Dewasa</button>
          <button class="tab-btn ${state.listTab === "anak" ? "active" : ""}" data-tab="anak">Anak-anak</button>
        </div>
        <div class="gerakan-grid" id="grid"></div>
      </div>
    </div>
  `;

  app.querySelectorAll(".tab-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      state.listTab = btn.dataset.tab;
      renderDaftar();
    });
  });

  const isAnak = state.listTab === "anak";
  const grid = document.getElementById("grid");
  grid.innerHTML = GERAKAN.map(
    (g) => `
    <a href="#/gerakan/${g.id}" class="gerakan-card">
      <div class="gerakan-num">${g.id}</div>
      <div class="gerakan-thumb">${
        isAnak
          ? g.imgAnak
            ? `<img src="${g.imgAnak}" alt="${g.nama} (anak)" class="gerakan-thumb-img">`
            : "🧒"
          : g.img
            ? `<img src="${g.img}" alt="${g.nama}" class="gerakan-thumb-img">`
            : POSE_EMOJI[POSE_ICONS[g.id]]
      }</div>
      <div class="gerakan-name">${g.nama}</div>
    </a>
  `,
  ).join("");
}

/* ===================== DETAIL GERAKAN ===================== */
function renderDetail(id) {
  const g = GERAKAN.find((x) => x.id === id) || GERAKAN[0];
  const isAnak = state.mode === "anak";
  const total = GERAKAN.length;

  app.innerHTML = `
    <div class="detail-layout">
      <div class="stepper">
        ${GERAKAN.map(
          (x) => `
          <a href="#/gerakan/${x.id}" class="step-dot ${x.id === g.id ? "active" : x.id < g.id ? "done" : ""}">${x.id}</a>
        `,
        ).join("")}
      </div>
      <div class="detail-content">
        <a href="#/gerakan" class="back-link">← Kembali</a>
        <h1>${g.id}. ${g.nama}</h1>
        <div class="detail-grid">
          <div class="detail-figure">
            ${
              isAnak
                ? g.imgAnak
                  ? `<img src="${g.imgAnak}" alt="${g.nama} (anak)" class="detail-figure-img">`
                  : "🧒"
                : g.img
                  ? `<img src="${g.img}" alt="${g.nama}" class="detail-figure-img">`
                  : POSE_EMOJI[POSE_ICONS[g.id]]
            }
            ${
              state.detailTab === "video"
                ? `
              <div class="play-overlay" id="figPlay"><div class="circle">▶</div></div>
            `
                : ""
            }
          </div>
          <div class="detail-card">
            <div class="detail-tabs">
              <button class="dtab ${state.detailTab === "bacaan" ? "active" : ""}" data-tab="bacaan">Bacaan</button>
              <button class="dtab ${state.detailTab === "video" ? "active" : ""}" data-tab="video">Video</button>
              <button class="dtab ${state.detailTab === "penjelasan" ? "active" : ""}" data-tab="penjelasan">Penjelasan</button>
            </div>
            <div class="dtab-body" id="dtabBody"></div>
          </div>
        </div>

        <div class="progress-row">
          <span>Gerakan ${g.id} dari ${total}</span>
          <div class="progress-dots">
            ${GERAKAN.map((x) => `<div class="pdot ${x.id < g.id ? "done" : x.id === g.id ? "current" : ""}"></div>`).join("")}
          </div>
        </div>

        <div class="actions-row">
          <a href="#/gerakan/${Math.max(1, g.id - 1)}" class="btn btn-outline">← Kembali</a>
          <button class="btn btn-secondary" id="autoplayBtn">▶ Autoplay</button>
          <a href="#/gerakan/${Math.min(total, g.id + 1)}" class="btn btn-primary">Selanjutnya →</a>
        </div>
      </div>
    </div>
  `;

  renderDetailTabBody(g);

  app.querySelectorAll(".dtab").forEach((btn) => {
    btn.addEventListener("click", () => {
      state.detailTab = btn.dataset.tab;
      renderDetail(id);
    });
  });

  // Autoplay: putar audio langsung, lalu pindah otomatis saat audio selesai
  const autoplayBtn = document.getElementById("autoplayBtn");
  autoplayBtn.innerHTML = state.autoplay ? "⏸ Berhenti" : "▶ Autoplay";
  autoplayBtn.addEventListener("click", () => {
    if (state.autoplay) {
      stopAutoplay();
    } else {
      state.autoplay = true;
      autoplayBtn.innerHTML = "⏸ Berhenti";
      runAutoplayStep(g, total);
    }
  });

  // Jika autoplay sedang berjalan (lanjutan dari gerakan sebelumnya), langsung jalankan lagi
  if (state.autoplay) {
    runAutoplayStep(g, total);
  }
}

// Hentikan autoplay dan bersihkan timer yang tertunda
function stopAutoplay() {
  state.autoplay = false;
  if (window._autoplayFallbackTimer) {
    clearTimeout(window._autoplayFallbackTimer);
    window._autoplayFallbackTimer = null;
  }
  const btn = document.getElementById("autoplayBtn");
  if (btn) btn.innerHTML = "▶ Autoplay";
}

// Pindah ke gerakan berikutnya, atau berhenti jika sudah gerakan terakhir
function goToNextGerakan(currentId, total) {
  const next = currentId + 1;
  if (next > total) {
    stopAutoplay();
    return;
  }
  location.hash = `#/gerakan/${next}`;
}

// Menjalankan satu langkah autoplay: pastikan tab 'Bacaan' aktif lalu putar audionya
function runAutoplayStep(g, total) {
  if (window._autoplayFallbackTimer) {
    clearTimeout(window._autoplayFallbackTimer);
    window._autoplayFallbackTimer = null;
  }
  if (!state.autoplay) return;

  // Audio hanya tersedia di tab Bacaan, pindah ke tab itu dulu bila perlu
  if (state.detailTab !== "bacaan") {
    state.detailTab = "bacaan";
    renderDetail(g.id);
    return;
  }

  const audio = document.getElementById("gerakanAudio");
  if (audio) {
    // Hentikan audio lain yang mungkin sedang berjalan
    document.querySelectorAll("audio").forEach((a) => {
      if (a !== audio) a.pause();
    });
    const playBtn = document.getElementById("playAudio");
    audio.currentTime = 0;
    audio
      .play()
      .then(() => {
        if (playBtn) playBtn.textContent = "⏸";
      })
      .catch(() => {
        // Jika browser memblokir autoplay audio, tetap lanjut ke gerakan berikutnya
        window._autoplayFallbackTimer = setTimeout(() => {
          goToNextGerakan(g.id, total);
        }, 3500);
      });
    audio.addEventListener(
      "ended",
      () => {
        if (state.autoplay) goToNextGerakan(g.id, total);
      },
      { once: true },
    );
  } else {
    // Tidak ada audio untuk gerakan ini, lanjut otomatis setelah jeda singkat
    window._autoplayFallbackTimer = setTimeout(() => {
      goToNextGerakan(g.id, total);
    }, 3500);
  }
}

function renderDetailTabBody(g) {
  const bodyEl = document.getElementById("dtabBody");
  const isAnak = state.mode === "anak";

  if (state.detailTab === "penjelasan") {
    bodyEl.innerHTML = `
      <div class="field-label">Bacaan</div>
      <div class="field-value arabic">${g.bacaan}</div>
      <div class="field-label">Latin</div>
      <div class="field-value">${g.latin}</div>
      <div class="field-label">Terjemahan</div>
      <div class="field-value">${g.terjemahan}</div>
      <div class="field-label">Cara Melakukan Gerakan</div>
      <div class="field-value" style="margin-bottom:0;">${g.penjelasan}</div>
    `;
  } else if (state.detailTab === "video") {
    // tab 'video' menampilkan video peragaan gerakan
    const videoSrc = isAnak ? g.videoAnak || g.video : g.video;
    bodyEl.innerHTML = `
      <div class="field-label">Bacaan</div>
      <div class="field-value arabic">${g.bacaan}</div>
      <div class="field-label">Latin</div>
      <div class="field-value">${g.latin}</div>
      <div class="field-label">Video Peragaan</div>
      ${
        videoSrc
          ? `<video id="gerakanVideo" src="${videoSrc}" controls playsinline style="width:100%;border-radius:12px;background:#000;max-height:360px;"></video>`
          : `<div class="field-value" style="margin-bottom:0;opacity:.6;">Video belum tersedia untuk gerakan ini.</div>`
      }
    `;
  } else {
    // tab 'bacaan' menampilkan info bacaan + audio player
    const audioSrc = isAnak ? g.audioAnak || g.audio : g.audio;
    bodyEl.innerHTML = `
      <div class="field-label">Bacaan</div>
      <div class="field-value arabic">${g.bacaan}</div>
      <div class="field-label">Latin</div>
      <div class="field-value">${g.latin}</div>
      <div class="field-label">Terjemahan</div>
      <div class="field-value">${g.terjemahan}</div>
      <div class="field-label">Audio</div>
      ${
        audioSrc
          ? `
      <div class="audio-row">
        <button class="audio-btn" id="playAudio">▶</button>
        <div class="audio-track"><div class="audio-progress" id="audioProgress"></div></div>
        <span class="audio-time" id="audioTime">0:00 / 0:00</span>
      </div>
      <audio id="gerakanAudio" src="${audioSrc}" preload="metadata"></audio>
      `
          : `<div class="field-value" style="margin-bottom:0;opacity:.6;">Audio belum tersedia untuk gerakan ini.</div>`
      }
    `;
    if (audioSrc) setupAudioPlayer(audioSrc);
  }
}

// Pemutar audio nyata, terhubung ke file .mp3/.mpeg asli tiap gerakan
function setupAudioPlayer(src) {
  const btn = document.getElementById("playAudio");
  const progress = document.getElementById("audioProgress");
  const timeEl = document.getElementById("audioTime");
  const audio = document.getElementById("gerakanAudio");

  function formatTime(sec) {
    if (!isFinite(sec)) return "0:00";
    const m = Math.floor(sec / 60);
    const s = Math.floor(sec % 60)
      .toString()
      .padStart(2, "0");
    return `${m}:${s}`;
  }

  audio.addEventListener("loadedmetadata", () => {
    timeEl.textContent = `0:00 / ${formatTime(audio.duration)}`;
  });

  audio.addEventListener("timeupdate", () => {
    const pct = audio.duration ? (audio.currentTime / audio.duration) * 100 : 0;
    progress.style.width = pct + "%";
    timeEl.textContent = `${formatTime(audio.currentTime)} / ${formatTime(audio.duration)}`;
  });

  audio.addEventListener("ended", () => {
    btn.textContent = "▶";
    progress.style.width = "0%";
  });

  btn.addEventListener("click", () => {
    // Hentikan audio gerakan lain yang mungkin sedang berjalan
    document.querySelectorAll("audio").forEach((a) => {
      if (a !== audio) a.pause();
    });
    if (audio.paused) {
      audio.play();
      btn.textContent = "⏸";
    } else {
      audio.pause();
      btn.textContent = "▶";
    }
  });
}

/* ===================== SPLASH SCREEN ===================== */
function initSplash() {
  const splash = document.getElementById("splash");
  const appWrapper = document.getElementById("appWrapper");
  const infobar = document.getElementById("infobar");
  const btn = document.getElementById("splashBtn");
  if (!splash || !appWrapper || !btn) return;

  // Tampilkan hanya splash pada awal
  appWrapper.classList.add("hidden");

  btn.addEventListener("click", () => {
    splash.classList.add("hidden");
    appWrapper.classList.remove("hidden");
    window.scrollTo(0, 0);
  });
}

/* ===================== INIT ===================== */
applyMode(state.mode);
navigate();
initSplash();
