"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

const CONTRACT_ADDRESS = "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";

interface Bubble {
  id: number;
  left: string;
  size: number;
  duration: number;
  delay: number;
}

export default function Home() {
  const [copied, setCopied] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [bubbles, setBubbles] = useState<Bubble[]>([]);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const generated: Bubble[] = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      size: Math.random() * 40 + 10,
      duration: Math.random() * 15 + 10,
      delay: Math.random() * 10,
    }));
    setBubbles(generated);
  }, []);

  const copyCA = async () => {
    try {
      await navigator.clipboard.writeText(CONTRACT_ADDRESS);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      const textArea = document.createElement("textarea");
      textArea.value = CONTRACT_ADDRESS;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <>
      {/* Ocean Background */}
      <div className="ocean-bg">
        {bubbles.map((b) => (
          <div
            key={b.id}
            className="bubble"
            style={{
              left: b.left,
              width: `${b.size}px`,
              height: `${b.size}px`,
              animationDuration: `${b.duration}s`,
              animationDelay: `${b.delay}s`,
            }}
          />
        ))}
      </div>

      {/* Navigation */}
      <nav className="navbar" id="navbar">
        <a href="#" className="navbar-brand">
          <Image
            src="/ruiji-mascot.png"
            alt="Ruiji 瑞吉"
            width={40}
            height={40}
          />
          <span>Ruiji 瑞吉</span>
        </a>
        <ul className={`nav-links ${mobileMenuOpen ? "mobile-open" : ""}`}>
          <li>
            <a
              href="#story"
              onClick={() => setMobileMenuOpen(false)}
            >
              Story
            </a>
          </li>
          <li>
            <a
              href="#token"
              onClick={() => setMobileMenuOpen(false)}
            >
              Token
            </a>
          </li>
          <li>
            <a
              href="#videos"
              onClick={() => setMobileMenuOpen(false)}
            >
              Videos
            </a>
          </li>
          <li>
            <a
              href="#socials"
              onClick={() => setMobileMenuOpen(false)}
            >
              Community
            </a>
          </li>
          <li>
            <a
              href="#token"
              className="nav-buy-btn"
              onClick={() => setMobileMenuOpen(false)}
            >
              Buy $RUIJI
            </a>
          </li>
        </ul>
        <button
          className="mobile-menu-btn"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
          id="mobile-menu-toggle"
        >
          {mobileMenuOpen ? "✕" : "☰"}
        </button>
      </nav>

      {/* Hero Section */}
      <section className="hero" id="hero">
        <div className="hero-content">
          <div className="hero-text">
            <div className="hero-badge">
              <span className="pulse-dot" />
              Live on Solana (Pump.fun)
            </div>
            <h1 className="hero-title">
              <span className="name-en">Ruiji</span>
              <span className="name-jp">瑞吉 🦭</span>
            </h1>
            <p className="hero-desc">
              A small, gentle sea creature whose story touched many hearts.
              Found alone on a quiet seashore, Ruiji&apos;s journey from rescue to
              hope inspired a global community. Now, his spirit lives on—on the
              blockchain.
            </p>
            <div className="hero-actions">
              <a href="#token" className="btn-primary" id="hero-buy-btn">
                <span>🪙</span> Get $RUIJI
              </a>
              <a href="#story" className="btn-secondary" id="hero-story-btn">
                <span>📖</span> Read His Story
              </a>
            </div>
          </div>
          <div className="hero-visual">
            <div className="mascot-container">
              <div className="mascot-glow" />
              <div className="mascot-ring" />
              <Image
                src="/ruiji-mascot.png"
                alt="Ruiji the Seal"
                width={300}
                height={300}
                className="mascot-img"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contract Address Section */}
      <section className="ca-section" id="token">
        <div className="ca-card">
          <div className="ca-label">Contract Address</div>
          <div className="ca-chain">
            <span className="chain-badge">
              <Image src="/solana-logo.png" alt="Solana" width={16} height={16} style={{ borderRadius: '50%' }} /> Solana • <Image src="/pump-logo.png" alt="Pump.fun" width={16} height={16} style={{ borderRadius: '4px' }} /> Pump.fun
            </span>
          </div>
          <div className="ca-address-wrapper" onClick={copyCA} style={{ cursor: 'pointer' }} title="Click to copy">
            <span className="ca-address" id="ca-text">
              {CONTRACT_ADDRESS}
            </span>
            <span style={{ fontSize: '1.1rem', opacity: copied ? 1 : 0.5, transition: 'opacity 0.2s', flexShrink: 0 }}>
              {copied ? '✅' : '📋'}
            </span>
          </div>
          <div style={{ marginTop: "24px" }} className="ca-links">
            <a
              href="#"
              className="ca-link"
              target="_blank"
              rel="noopener noreferrer"
              id="pump-link"
            >
              <Image src="/pump-logo.png" alt="Pump.fun" width={18} height={18} style={{ borderRadius: '4px' }} /> Pump.fun
            </a>
            <a
              href="#"
              className="ca-link"
              target="_blank"
              rel="noopener noreferrer"
              id="dexscreener-link"
            >
              <Image src="/dexscreener-logo.png" alt="DexScreener" width={18} height={18} style={{ borderRadius: '4px' }} /> DexScreener
            </a>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section story-section" id="story">
        <div className="section-header">
          <div className="section-label">The Story</div>
          <h2 className="section-title">How It All Began</h2>
          <p className="section-subtitle">
            From a lonely shore to the hearts of thousands — this is Ruiji&apos;s
            journey.
          </p>
        </div>
        <div className="story-grid">
          <div className="story-card">
            <span className="story-icon">🌊</span>
            <h3>Found Alone</h3>
            <p>
              Ruiji was discovered on a quiet seashore, separated from his family
              and struggling to survive. Weak and vulnerable, he needed help to
              make it through.
            </p>
          </div>
          <div className="story-card">
            <span className="story-icon">🤲</span>
            <h3>Rescued with Love</h3>
            <p>
              Caring people stepped in, giving Ruiji food, warmth, and
              protection. Day by day, with gentle care, he grew stronger and
              began to thrive once more.
            </p>
          </div>
          <div className="story-card">
            <span className="story-icon">✨</span>
            <h3>A Symbol of Hope</h3>
            <p>
              Ruiji became a beacon of hope — proof that kindness can save even
              the smallest life. His story inspired a community that now carries
              his spirit forward.
            </p>
          </div>
        </div>
      </section>

      {/* Tokenomics */}
      <section className="section" id="tokenomics">
        <div className="section-header">
          <div className="section-label">Tokenomics</div>
          <h2 className="section-title">$RUIJI on Solana</h2>
          <p className="section-subtitle">
            Launched on Pump.fun — community-driven, no presale, LP burned.
          </p>
        </div>
        <div className="tokenomics-grid">
          <div className="token-stat">
            <div className="stat-value">1B</div>
            <div className="stat-label">Total Supply</div>
          </div>
          <div className="token-stat">
            <div className="stat-value">0%</div>
            <div className="stat-label">Tax</div>
          </div>
          <div className="token-stat">
            <div className="stat-value">🔥</div>
            <div className="stat-label">LP Burned</div>
          </div>
        </div>
      </section>

      {/* Videos Section */}
      <section className="section video-section" id="videos">
        <div className="section-header">
          <div className="section-label">Watch</div>
          <h2 className="section-title">Meet Ruiji 🦭</h2>
          <p className="section-subtitle">
            Watch Ruiji in action — the seal that captured millions of hearts.
          </p>
        </div>
        <div className="video-grid">
          <div className="video-card">
            <div className="video-wrapper">
              <video
                ref={videoRef}
                controls
                playsInline
                preload="metadata"
                poster="/ruiji-mascot.png"
                id="ruiji-video-1"
              >
                <source src="/videos/ruiji-clip.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="video-info">
              <h3>Ruiji 瑞吉 — The Little Seal That Could</h3>
              <p>Watch Ruiji&apos;s heartwarming moments that made him an internet sensation.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Socials Section */}
      <section className="section socials-section" id="socials">
        <div className="section-header">
          <div className="section-label">Community</div>
          <h2 className="section-title">Join the Pod 🐾</h2>
          <p className="section-subtitle">
            Follow Ruiji across socials and become part of the community.
          </p>
        </div>
        <div className="socials-grid">
          <a
            href="https://www.tiktok.com/@seal_sealion?_r=1&_t=ZS-95XdyeCG5DD"
            target="_blank"
            rel="noopener noreferrer"
            className="social-card"
            id="social-tiktok"
          >
            <div className="social-icon tiktok">🎵</div>
            <div className="social-card-text">
              <h3>TikTok</h3>
              <p>@seal_sealion</p>
            </div>
            <span className="social-arrow">→</span>
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="social-card"
            id="social-twitter"
          >
            <div className="social-icon twitter">𝕏</div>
            <div className="social-card-text">
              <h3>Twitter / X</h3>
              <p>Follow for updates</p>
            </div>
            <span className="social-arrow">→</span>
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="social-card"
            id="social-telegram"
          >
            <div className="social-icon telegram">✈️</div>
            <div className="social-card-text">
              <h3>Telegram</h3>
              <p>Join the chat</p>
            </div>
            <span className="social-arrow">→</span>
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="social-card"
            id="social-pump"
          >
            <div className="social-icon pump"><Image src="/pump-logo.png" alt="Pump.fun" width={28} height={28} style={{ borderRadius: '6px' }} /></div>
            <div className="social-card-text">
              <h3>Pump.fun</h3>
              <p>Buy on Pump.fun</p>
            </div>
            <span className="social-arrow">→</span>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer" id="footer">
        <div className="footer-brand">
          <Image
            src="/ruiji-mascot.png"
            alt="Ruiji"
            width={32}
            height={32}
          />
          <span>Ruiji 瑞吉</span>
        </div>
        <p className="footer-copy">
          © 2025 Ruiji 瑞吉. All rights reserved. Built with 🤍 for the seal
          community.
        </p>
      </footer>
    </>
  );
}
