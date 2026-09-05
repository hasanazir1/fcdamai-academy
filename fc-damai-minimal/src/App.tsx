import { useEffect, useState, type ReactNode } from 'react';
import { ArrowDownRight, ArrowUpRight, Check, ChevronRight, Clock3, MapPin, Menu, Phone, Play, Trophy, X } from 'lucide-react';
import { ErrorBoundary } from './components/error-boundary';
import NotFound from './pages/not-found';
import { Route, Switch, useLocation, Router as WouterRouter } from 'wouter';
import crest from './assets/الشعار-removebg-preview_1788609679329.png';
import recruitment from './assets/WhatsApp_Image_2025-01-06_at_09.02.07_9fc516ba_1788609624899.jpg';
import heroTeam from './assets/WhatsApp_Image_2025-01-08_at_05.23.57_7f462fa1_1788609679333.jpg';
import playerPortrait from './assets/WhatsApp_Image_2025-01-08_at_05.22.17_7d648b6a_1788609679329.jpg';
import playerPortraitAlt from './assets/WhatsApp_Image_2025-01-08_at_05.23.17_4109d1f2_1788609679330.jpg';
import trainingGroup from './assets/WhatsApp_Image_2025-01-08_at_05.23.19_251a16bc_1788609679331.jpg';
import olderGroup from './assets/WhatsApp_Image_2025-01-08_at_05.23.18_c67c6a8c_1788609679331.jpg';
import nightTeam from './assets/WhatsApp_Image_2025-01-08_at_05.23.20_b814d7d9_1788609679331.jpg';
import medals from './assets/WhatsApp_Image_2025-01-08_at_05.23.23_3a73e34f_1788609679332.jpg';
import coachTalk from './assets/WhatsApp_Image_2025-01-08_at_05.23.24_a6d12506_1788609679332.jpg';
import blueTeam from './assets/WhatsApp_Image_2025-01-08_at_05.23.25_b8e332a5_1788609679333.jpg';

const phoneHref = 'tel:+60122728481';

const gallery = [
  { src: heroTeam, alt: 'FC Damai players together on the Ampang field', label: 'One team, many stories', size: 'wide' },
  { src: playerPortrait, alt: 'Young FC Damai player training with a ball', label: 'Find your touch', size: 'tall' },
  { src: coachTalk, alt: 'Coach Raed talking to the team', label: 'Listen. Learn. Lead.', size: 'square' },
  { src: nightTeam, alt: 'FC Damai team after a night match', label: 'Earn the shirt', size: 'tall' },
  { src: medals, alt: 'FC Damai players with medals', label: 'Good nights', size: 'wide' },
  { src: blueTeam, alt: 'FC Damai blue kit team on a football pitch', label: 'Match ready', size: 'square' },
];

function Logo({ light = false }: { light?: boolean }) {
  return (
    <a href="#top" data-testid="link-logo" className="flex items-center gap-2.5">
      <img src={crest} alt="FC Damai crest" className={`h-12 w-auto object-contain ${light ? '' : 'brightness-0'}`} />
      <span className={`font-display text-xl font-bold leading-[.8] tracking-wide ${light ? 'text-[#f5f0e7]' : 'text-[#161c2a]'}`}>
        FC<br /><span className="text-[#ef302f]">DAMAI</span>
      </span>
    </a>
  );
}

function SectionHeading({ eyebrow, title, detail, light = false }: { eyebrow: string; title: ReactNode; detail?: string; light?: boolean }) {
  return (
    <div className={`max-w-2xl ${light ? 'text-[#f5f0e7]' : 'text-[#161c2a]'}`}>
      <p className={`section-kicker mb-4 ${light ? 'text-[#80d978]' : 'text-[#148944]'}`}>{eyebrow}</p>
      <h2 className="font-display text-5xl font-extrabold uppercase leading-[.9] tracking-[-.025em] sm:text-7xl">{title}</h2>
      {detail ? <p className={`mt-6 max-w-lg text-base leading-7 ${light ? 'text-[#b7c5bb]' : 'text-[#586273]'}`}>{detail}</p> : null}
    </div>
  );
}

function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeImage, setActiveImage] = useState<typeof gallery[number] | null>(null);

  useEffect(() => {
    const sections = document.querySelectorAll('[data-reveal]');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <main id="top" className="overflow-hidden bg-[#f5f0e7]">
      <div className="bg-[#ef302f] px-5 py-2.5 text-center text-[11px] font-bold uppercase tracking-[.18em] text-[#fff7ed]">
        <span className="opacity-75">Ampang, Kuala Lumpur</span><span className="mx-3 opacity-40">/</span><span>New players welcome · Ages 8–18</span>
      </div>

      <header className="absolute left-0 right-0 top-11 z-30 px-5 py-5 sm:px-8">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <Logo light />
          <nav className={`absolute left-4 right-4 top-[calc(100%+4px)] rounded-sm border border-white/15 bg-[#101a21]/95 p-3 shadow-2xl backdrop-blur-md md:static md:flex md:items-center md:gap-8 md:border-0 md:bg-transparent md:p-0 md:shadow-none ${menuOpen ? 'block' : 'hidden md:flex'}`}>
            {['The academy', 'Training', 'Gallery'].map((item, index) => (
              <a key={item} href={['#academy', '#training', '#gallery'][index]} onClick={closeMenu} data-testid={`link-nav-${item.toLowerCase().replace(' ', '-')}`} className="block px-3 py-3 text-sm font-semibold text-[#f5f0e7] transition-colors hover:text-[#80d978] md:p-0">
                {item}
              </a>
            ))}
            <a href="#join" onClick={closeMenu} data-testid="link-nav-join" className="mt-2 flex items-center justify-center gap-2 bg-[#80d978] px-4 py-3 text-sm font-bold text-[#102027] transition-transform hover:-translate-y-0.5 md:mt-0">
              Book a session <ArrowUpRight size={15} />
            </a>
          </nav>
          <button type="button" onClick={() => setMenuOpen((open) => !open)} data-testid="button-toggle-menu" aria-label="Toggle navigation" className="grid h-11 w-11 place-items-center border border-white/25 text-[#f5f0e7] md:hidden">
            {menuOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>
      </header>

      <section className="texture relative min-h-[760px] bg-[#101a21] text-[#f5f0e7] sm:min-h-[850px]">
        <div className="absolute inset-0">
          <img src={heroTeam} alt="" className="h-full w-full object-cover object-center opacity-50" />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,#101a21_4%,rgba(16,26,33,.82)_38%,rgba(16,26,33,.18)_100%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(0deg,#101a21_0%,transparent_35%)]" />
        </div>
        <div className="relative mx-auto flex min-h-[760px] max-w-7xl flex-col justify-end px-5 pb-14 pt-40 sm:min-h-[850px] sm:px-8 sm:pb-20">
          <div className="max-w-4xl">
            <p className="section-kicker reveal text-[#80d978]">Football is better together · Sejak 2020</p>
            <h1 className="reveal reveal-delay-1 mt-5 max-w-4xl font-display text-[5.5rem] font-extrabold uppercase leading-[.78] tracking-[-.04em] sm:text-[9rem] lg:text-[11rem]">
              Play<br /><span className="text-[#80d978]">with</span><br />purpose.
            </h1>
            <div className="reveal reveal-delay-2 mt-8 flex max-w-xl flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
              <p className="max-w-sm text-sm leading-6 text-[#d0d8d0] sm:text-base">A football academy for young players who want to get sharper, stronger and braver — right here in Kampung Kuala Ampang.</p>
              <a href="#training" data-testid="link-hero-training" className="group inline-flex shrink-0 items-center gap-3 font-display text-xl font-bold uppercase text-[#f5f0e7]">
                See the rhythm <span className="grid h-10 w-10 place-items-center rounded-full bg-[#ef302f] transition-transform group-hover:rotate-45"><ArrowDownRight size={18} /></span>
              </a>
            </div>
          </div>
          <div className="mt-16 flex items-end justify-between border-t border-white/20 pt-5 text-xs text-[#b7c5bb] sm:mt-20">
            <p className="max-w-[180px] leading-5">Training the next generation of Ampang footballers.</p>
            <p className="font-mono text-[10px] uppercase tracking-wider">3° 09' 47.4" N / 101° 45' 16.2" E</p>
          </div>
        </div>
        <div className="absolute bottom-16 right-[-4.5rem] hidden rotate-90 font-mono text-[10px] uppercase tracking-[.3em] text-white/50 lg:block">FC Damai Football Academy</div>
      </section>

      <section id="academy" className="relative bg-[#f5f0e7] px-5 py-24 sm:px-8 sm:py-32">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[1fr_1.1fr] lg:items-center lg:gap-24">
          <div data-reveal className="relative max-w-md">
            <div className="image-frame relative aspect-[.78] overflow-hidden bg-[#d9dfd1]">
              <img src={playerPortraitAlt} alt="FC Damai player holding a red football" className="image-shift h-full w-full object-cover" />
              <div className="absolute bottom-5 left-5 bg-[#ef302f] px-4 py-2 font-mono text-[10px] font-bold uppercase tracking-wider text-white">Born to move</div>
            </div>
            <div className="absolute -bottom-8 -right-8 hidden h-36 w-36 rounded-full border-[14px] border-[#80d978] bg-[#101a21] p-3 text-center text-[#f5f0e7] sm:grid sm:place-items-center">
              <span className="font-display text-3xl font-bold leading-[.82]">FC<br />2020</span>
            </div>
            <p className="mt-5 font-mono text-[10px] uppercase tracking-[.15em] text-[#687465]">01 / The academy</p>
          </div>
          <div data-reveal className="lg:pt-6">
            <SectionHeading eyebrow="Built for the beautiful game" title={<>A place to <span className="text-[#148944]">belong.</span></>} detail="FC Damai is a local football family with a simple idea: good coaching, regular minutes and a pitch full of people who want you to improve." />
            <div className="mt-12 grid gap-8 border-t border-[#cbd1c5] pt-8 sm:grid-cols-3">
              {[['8—18', 'years welcome'], ['3', 'weekly sessions'], ['Ampang', 'our home ground']].map(([stat, label]) => (
                <div key={label}><p className="font-display text-5xl font-extrabold leading-none text-[#ef302f]">{stat}</p><p className="mt-2 max-w-[100px] text-xs font-semibold uppercase leading-4 tracking-wide text-[#586273]">{label}</p></div>
              ))}
            </div>
            <a href="#join" data-testid="link-academy-join" className="mt-12 inline-flex items-center gap-3 border-b-2 border-[#161c2a] pb-2 font-display text-xl font-bold uppercase text-[#161c2a] transition-colors hover:border-[#ef302f] hover:text-[#ef302f]">Come train with us <ChevronRight size={18} /></a>
          </div>
        </div>
      </section>

      <section id="training" className="texture relative bg-[#80d978] px-5 py-24 sm:px-8 sm:py-32">
        <div className="mx-auto max-w-7xl">
          <div data-reveal className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <SectionHeading eyebrow="Training at Ampang" title={<>Find your<br /><span className="text-[#ef302f]">rhythm.</span></>} detail="Every session has a pulse. Arrive ready to work, leave with something new in your game." />
            <p className="max-w-xs text-sm font-medium leading-6 text-[#28563b]">No complicated sign-ups. Call Coach Raed, bring your boots and take your first touch.</p>
          </div>
          <div data-reveal className="mt-14 grid gap-3 lg:grid-cols-[1.25fr_.75fr]">
            <div className="diagonal-cut bg-[#101a21] p-7 text-[#f5f0e7] sm:p-10">
              <div className="flex items-start justify-between">
                <span className="grid h-11 w-11 place-items-center rounded-full bg-[#ef302f] font-display text-xl font-bold">01</span>
                <Clock3 className="text-[#80d978]" size={22} />
              </div>
              <div className="mt-24 sm:mt-36">
                <p className="font-mono text-[10px] uppercase tracking-[.17em] text-[#80d978]">Midweek energy</p>
                <h3 className="mt-2 font-display text-5xl font-extrabold uppercase leading-none sm:text-7xl">Wednesday<br /><span className="text-[#ef302f]">evening</span></h3>
                <p className="mt-5 font-mono text-sm text-[#c1cec2]">5:00 — 6:30 PM</p>
              </div>
            </div>
            <div className="flex flex-col justify-between bg-[#f5f0e7] p-7 sm:p-10">
              <div className="flex items-start justify-between">
                <span className="grid h-11 w-11 place-items-center rounded-full bg-[#161c2a] font-display text-xl font-bold text-[#80d978]">02</span>
                <span className="font-mono text-[10px] uppercase tracking-[.15em] text-[#687465]">Weekend flow</span>
              </div>
              <div className="mt-24">
                <h3 className="font-display text-5xl font-extrabold uppercase leading-[.88] text-[#161c2a] sm:text-6xl">Saturday<br /><span className="text-[#148944]">& Sunday</span></h3>
                <p className="mt-5 font-mono text-sm text-[#586273]">8:00 — 9:30 AM</p>
              </div>
            </div>
          </div>
          <div className="mt-5 flex flex-col justify-between gap-4 border-t border-[#28563b]/30 pt-4 text-xs font-semibold text-[#28563b] sm:flex-row">
            <span className="inline-flex items-center gap-2"><MapPin size={15} /> Kampung Kuala Ampang Field</span>
            <span>Rain or shine, we keep moving.</span>
          </div>
        </div>
      </section>

      <section className="bg-[#161c2a] px-5 py-24 text-[#f5f0e7] sm:px-8 sm:py-32">
        <div className="mx-auto max-w-7xl">
          <div data-reveal className="grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:items-center">
            <div>
              <SectionHeading light eyebrow="More than drills" title={<>The game<br /><span className="text-[#80d978]">travels</span> with you.</>} detail="From your first session to match day, we build the habits that stay with you off the field too." />
              <div className="mt-10 space-y-5">
                {['Technical confidence', 'Team-first character', 'Matchday courage'].map((item, index) => (
                  <div key={item} className="flex items-center gap-4 border-b border-white/15 pb-4">
                    <span className="font-mono text-xs text-[#ef302f]">0{index + 1}</span><span className="font-display text-2xl font-semibold uppercase">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="image-frame col-span-2 aspect-[1.8] overflow-hidden bg-[#28563b]"><img src={trainingGroup} alt="Young FC Damai players lining up for training" className="image-shift h-full w-full object-cover" /></div>
              <div className="image-frame aspect-[.88] overflow-hidden bg-[#28563b]"><img src={olderGroup} alt="Older FC Damai players celebrating on the field" className="image-shift h-full w-full object-cover" /></div>
              <div className="relative overflow-hidden bg-[#ef302f] p-6 sm:p-8">
                <Trophy className="mb-10 text-[#f5f0e7]" size={28} />
                <p className="font-display text-4xl font-extrabold uppercase leading-[.85]">Grow<br />loudly.</p>
                <p className="mt-8 text-xs leading-5 text-[#ffd0ca]">Every player gets a voice, a challenge and a place in the squad.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="gallery" className="bg-[#f5f0e7] px-5 py-24 sm:px-8 sm:py-32">
        <div className="mx-auto max-w-7xl">
          <div data-reveal className="flex flex-col justify-between gap-8 sm:flex-row sm:items-end">
            <SectionHeading eyebrow="From the field" title={<>This is <span className="text-[#ef302f]">Damai.</span></>} detail="Real sessions. Real friendships. Real grass under the boots." />
            <p className="font-mono text-[10px] uppercase tracking-[.14em] text-[#687465]">Tap a moment to make it bigger</p>
          </div>
          <div className="mt-14 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
            {gallery.map((item, index) => (
              <button type="button" key={item.src} onClick={() => setActiveImage(item)} data-testid={`button-gallery-${index + 1}`} className={`image-frame group relative overflow-hidden bg-[#d9dfd1] text-left ${item.size === 'wide' ? 'col-span-2 aspect-[1.65]' : item.size === 'tall' ? 'aspect-[.76]' : 'aspect-square'} ${index === 0 ? 'sm:col-span-2 sm:row-span-2' : ''}`}>
                <img src={item.src} alt={item.alt} className="image-shift h-full w-full object-cover" />
                <span className="absolute inset-x-0 bottom-0 translate-y-full bg-[#101a21]/85 px-4 py-3 text-xs font-bold uppercase tracking-wide text-white transition-transform group-hover:translate-y-0">{item.label}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section id="join" className="texture bg-[#ef302f] px-5 py-24 sm:px-8 sm:py-32">
        <div className="mx-auto max-w-7xl">
          <div data-reveal className="grid gap-14 lg:grid-cols-[1.15fr_.85fr] lg:items-end">
            <div>
              <p className="section-kicker text-[#ffd0ca]">Your next session starts here</p>
              <h2 className="mt-4 max-w-3xl font-display text-6xl font-extrabold uppercase leading-[.82] tracking-[-.03em] text-[#f5f0e7] sm:text-8xl">Make room<br />for <span className="text-[#101a21]">more game.</span></h2>
              <p className="mt-8 max-w-md text-base leading-7 text-[#ffd0ca]">Membership is simple. Pick a plan, call Coach Raed and come meet the team at Kampung Kuala Ampang Field.</p>
            </div>
            <div className="bg-[#101a21] p-6 text-[#f5f0e7] sm:p-8">
              <p className="section-kicker text-[#80d978]">Membership / Keahlian</p>
              <div className="mt-7 space-y-3">
                {[['1 month', 'RM100'], ['2 months', 'RM180'], ['3 months', 'RM250']].map(([term, price], index) => (
                  <div key={term} className={`flex items-center justify-between border-b border-white/15 py-3 ${index === 2 ? 'border-b-0 pb-0' : ''}`}>
                    <span className="font-display text-2xl font-bold uppercase">{term}</span><span className="font-mono text-lg text-[#80d978]">{price}</span>
                  </div>
                ))}
              </div>
              <a href={phoneHref} data-testid="link-membership-call" className="mt-8 flex items-center justify-between bg-[#80d978] px-5 py-4 font-bold text-[#101a21] transition-colors hover:bg-[#f5f0e7]">Call to join <Phone size={18} /></a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f5f0e7] px-5 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto max-w-7xl">
          <div data-reveal className="grid gap-10 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
            <div className="relative overflow-hidden bg-[#d9dfd1]">
              <img src={recruitment} alt="FC Damai recruitment poster" className="h-[500px] w-full object-cover object-top sm:h-[600px]" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#101a21]/60 to-transparent" />
              <div className="absolute bottom-5 left-5 flex items-center gap-3 text-white"><Play size={15} fill="currentColor" /><span className="font-mono text-[10px] uppercase tracking-widest">Join the next chapter</span></div>
            </div>
            <div className="lg:pl-10">
              <SectionHeading eyebrow="Meet us at the field" title={<>Ready when<br /><span className="text-[#148944]">you are.</span></>} detail="Questions about age groups, training or your first session? Coach Raed is one call away." />
              <div className="mt-10 space-y-4 text-sm text-[#586273]">
                <p className="flex gap-3"><Check className="mt-0.5 shrink-0 text-[#148944]" size={18} /> Ages 8 to 18 welcome</p>
                <p className="flex gap-3"><Check className="mt-0.5 shrink-0 text-[#148944]" size={18} /> Welcoming players of every level</p>
                <p className="flex gap-3"><Check className="mt-0.5 shrink-0 text-[#148944]" size={18} /> Training in Ampang, Kuala Lumpur</p>
              </div>
              <a href={phoneHref} data-testid="link-contact-coach" className="mt-12 inline-flex items-center gap-3 bg-[#161c2a] px-6 py-4 font-bold text-[#f5f0e7] transition-transform hover:-translate-y-1">Call Coach Raed <span className="font-mono text-xs text-[#80d978]">+60 12-2728 481</span><ArrowUpRight size={17} /></a>
              <p className="mt-5 font-mono text-[10px] uppercase tracking-[.14em] text-[#687465]">السلام عليكم — Ahlan wa sahlan</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-[#101a21] px-5 py-10 text-[#f5f0e7] sm:px-8">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 md:flex-row md:items-end">
          <div><Logo light /><p className="mt-5 max-w-[240px] text-xs leading-5 text-[#b7c5bb]">A football family in Ampang, Kuala Lumpur. Built on the pitch, carried by the players.</p></div>
          <div className="flex flex-col gap-4 md:items-end"><a href={phoneHref} className="font-display text-3xl font-bold text-[#80d978] hover:text-[#f5f0e7]">+60 12-2728 481</a><p className="font-mono text-[10px] uppercase tracking-[.15em] text-[#687c70]">FC Damai Football Academy · Est. 2020</p></div>
        </div>
        <div className="mx-auto mt-10 flex max-w-7xl justify-between border-t border-white/15 pt-5 font-mono text-[9px] uppercase tracking-[.15em] text-[#687c70]"><span>Play with purpose.</span><a href="#top" data-testid="link-back-top" className="hover:text-[#80d978]">Back to top ↑</a></div>
      </footer>

      {activeImage ? (
        <div role="dialog" aria-modal="true" aria-label={activeImage.label} className="fixed inset-0 z-50 grid place-items-center bg-[#101a21]/90 p-5 backdrop-blur-sm" onClick={() => setActiveImage(null)}>
          <button type="button" onClick={() => setActiveImage(null)} data-testid="button-close-gallery" aria-label="Close image" className="absolute right-5 top-5 grid h-11 w-11 place-items-center bg-[#f5f0e7] text-[#101a21]"><X size={20} /></button>
          <div className="max-h-[85vh] max-w-5xl overflow-hidden bg-[#f5f0e7] p-2" onClick={(event) => event.stopPropagation()}>
            <img src={activeImage.src} alt={activeImage.alt} className="max-h-[78vh] w-auto object-contain" />
            <p className="px-3 py-3 font-display text-xl font-bold uppercase text-[#101a21]">{activeImage.label}</p>
          </div>
        </div>
      ) : null}
    </main>
  );
}

function Router() {
  return (
    <RoutedErrorBoundary>
      <Switch>
        <Route path="/" component={Home} />
        <Route component={NotFound} />
      </Switch>
    </RoutedErrorBoundary>
  );
}

function RoutedErrorBoundary({ children }: { children: ReactNode }) {
  const [location] = useLocation();
  return <ErrorBoundary resetKey={location}>{children}</ErrorBoundary>;
}

function App() {
  return (
    <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}>
      <Router />
    </WouterRouter>
  );
}

export default App;
