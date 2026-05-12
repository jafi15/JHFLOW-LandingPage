import { useState, useEffect, useRef } from "react";

const C = {
  pageBg:"#0B0B0F",surface:"#111117",elevated:"#18181F",border:"#1E1E28",
  borderEm:"#2A2A35",textPri:"#F0F0F2",textSec:"#7A7A8A",textTer:"#4A4A5A",
  textDis:"#2A2A38",accent:"#4F7EFF",accentHov:"#3D6CEE",accentLt:"#6B9FFF",
  accentTint:"#0D1838",accentMid:"#1A2848",
};

const GLOBAL_CSS = `
@import url('https://fonts.googleapis.com/css2?family=Inter:ital,wght@0,300;0,400;0,500;0,600;1,300&display=swap');
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
html{scroll-behavior:smooth}
body{background:#0B0B0F;overflow-x:hidden}
@keyframes blink{0%,100%{opacity:1}50%{opacity:0}}
@keyframes fadeUp{from{opacity:0;transform:translateY(16px)}to{opacity:1;transform:translateY(0)}}
@keyframes spin{to{transform:rotate(360deg)}}
@keyframes floatA{0%,100%{transform:translateY(0)}50%{transform:translateY(-7px)}}
@keyframes floatB{0%,100%{transform:translateY(-3px)}50%{transform:translateY(4px)}}
.fu0{animation:fadeUp .6s ease .06s both}
.fu1{animation:fadeUp .6s ease .14s both}
.fu2{animation:fadeUp .6s ease .24s both}
.fu3{animation:fadeUp .6s ease .36s both}
.fu4{animation:fadeUp .6s ease .50s both}
.fu5{animation:fadeUp .6s ease .66s both}
.nav-link{color:#5A5A6A;text-decoration:none;transition:color .15s}
.nav-link:hover{color:#F0F0F2}
.card-hover{transition:border-color .22s ease,transform .22s ease,box-shadow .22s ease}
.card-hover:hover{border-color:#4F7EFF!important;transform:translateY(-2px);box-shadow:0 12px 36px rgba(0,0,0,.5),0 1px 0 rgba(255,255,255,.05) inset}
.cta-btn{transition:background .18s ease,box-shadow .18s ease}
.cta-btn:hover{background:#3D6CEE!important;box-shadow:0 0 0 4px rgba(79,126,255,.14)}
.stat-card{transition:transform .25s ease,box-shadow .25s ease}
.stat-card:hover{transform:translateY(-3px);box-shadow:0 12px 36px rgba(0,0,0,.5),0 1px 0 rgba(255,255,255,.05) inset}
.step-line::after{content:'';position:absolute;left:19px;top:44px;bottom:-24px;width:.5px;background:linear-gradient(to bottom,#2A2A35,transparent)}
@media(prefers-reduced-motion:reduce){*{animation-duration:.01ms!important;transition-duration:.01ms!important}}
@media(max-width:900px){.mockup-wrap{display:none!important}.hero-content{max-width:100%!important}}
@media(max-width:768px){
  .hide-mobile{display:none!important}
  .hero-h1{font-size:clamp(32px,9vw,48px)!important}
  .grid-3,.grid-2{grid-template-columns:1fr!important}
  .cta-full{width:100%;justify-content:center}
  .form-stack{flex-direction:column!important}
  .form-stack input,.form-stack button{width:100%!important;border-radius:8px!important}
  .stats-grid{grid-template-columns:1fr 1fr!important}
  .sec{padding:72px 24px!important}
}
@media(max-width:480px){.stats-grid{grid-template-columns:1fr!important}}
`;

/* ─── Hooks ──────────────────────────────────────────────────── */
const TYPED_WORDS = ["AI-Chatbots.","Voice Agents.","CRM-Systeme.","Workflows.","Webdesign."];

function useTyped(words) {
  const [display, setDisplay] = useState("");
  const [phase, setPhase] = useState("typing");
  const [wi, setWi] = useState(0);
  const [ci, setCi] = useState(0);
  const [done, setDone] = useState(false);
  const t = useRef(null);
  useEffect(() => {
    if (done) return;
    const word = words[wi];
    const clr = () => clearTimeout(t.current);
    if (phase === "typing") {
      if (ci < word.length) { t.current = setTimeout(() => { setDisplay(word.slice(0,ci+1)); setCi(c=>c+1); }, 46+Math.random()*18); }
      else { if (wi===words.length-1){setDone(true);return;} t.current=setTimeout(()=>setPhase("deleting"),2400); }
    } else {
      if (ci>0){ t.current=setTimeout(()=>{setDisplay(word.slice(0,ci-1));setCi(c=>c-1);},26); }
      else { t.current=setTimeout(()=>{setWi(i=>i+1);setPhase("typing");},300); }
    }
    return clr;
  }, [phase,ci,wi,done,words]);
  return {display,done};
}

function useReveal(threshold=0.1) {
  const ref=useRef(null);
  const [visible,setVisible]=useState(false);
  useEffect(()=>{
    const el=ref.current; if(!el)return;
    const obs=new IntersectionObserver(([e])=>{if(e.isIntersecting){setVisible(true);obs.disconnect();}},{threshold});
    obs.observe(el); return ()=>obs.disconnect();
  },[threshold]);
  return {ref,visible};
}

function useMouseParallax(strength=1) {
  const [pos,setPos]=useState({x:0,y:0});
  const target=useRef({x:0,y:0});
  const current=useRef({x:0,y:0});
  const raf=useRef(null);
  useEffect(()=>{
    const onMove=(e)=>{
      const cx=window.innerWidth/2, cy=window.innerHeight/2;
      target.current={x:((e.clientX-cx)/cx)*strength, y:((e.clientY-cy)/cy)*strength};
    };
    window.addEventListener("mousemove",onMove,{passive:true});
    const loop=()=>{
      current.current.x+=(target.current.x-current.current.x)*0.055;
      current.current.y+=(target.current.y-current.current.y)*0.055;
      setPos({x:current.current.x,y:current.current.y});
      raf.current=requestAnimationFrame(loop);
    };
    raf.current=requestAnimationFrame(loop);
    return ()=>{window.removeEventListener("mousemove",onMove);cancelAnimationFrame(raf.current);};
  },[strength]);
  return pos;
}

const fadeUp=(v,d=0)=>({opacity:v?1:0,transform:v?"translateY(0)":"translateY(18px)",transition:`opacity .58s ease ${d}ms,transform .58s ease ${d}ms`});

/* ─── Shared: Eyebrow ────────────────────────────────────────── */
function Eyebrow({children}) {
  return (
    <div style={{fontSize:"11px",fontWeight:600,letterSpacing:".12em",textTransform:"uppercase",color:C.accent,marginBottom:"14px",display:"flex",alignItems:"center",gap:"10px"}}>
      <span style={{width:"20px",height:".5px",background:C.accent}}/>{children}
    </div>
  );
}

/* ─── Grid Background ────────────────────────────────────────── */
function GridBg({mx=0,my=0}) {
  return (
    <div style={{position:"absolute",inset:0,overflow:"hidden",pointerEvents:"none"}} aria-hidden="true">
      <svg width="100%" height="100%" style={{position:"absolute",inset:0}}>
        <defs>
          <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M60 0L0 0 0 60" fill="none" stroke="rgba(79,126,255,0.045)" strokeWidth="0.5"/>
          </pattern>
          <radialGradient id="gfade" cx="50%" cy="45%" r="55%">
            <stop offset="0%" stopColor="white" stopOpacity="1"/>
            <stop offset="100%" stopColor="white" stopOpacity="0"/>
          </radialGradient>
          <mask id="gmask"><rect width="100%" height="100%" fill="url(#gfade)"/></mask>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" mask="url(#gmask)"/>
      </svg>
      {/* Mouse-reactive ambient glow */}
      <div style={{position:"absolute",top:"14%",left:"50%",transform:`translate(calc(-50% + ${mx*22}px),${my*16}px)`,width:"900px",height:"600px",background:"radial-gradient(ellipse,rgba(79,126,255,0.065) 0%,transparent 65%)",pointerEvents:"none",willChange:"transform"}}/>
      {/* Bottom vignette */}
      <div style={{position:"absolute",inset:0,background:"radial-gradient(ellipse at 50% 110%,rgba(0,0,0,.65) 0%,transparent 65%)",pointerEvents:"none"}}/>
    </div>
  );
}

/* ─── Dashboard Mockup (Hero 2.5D element) ───────────────────── */
function DashboardMockup({mx=0,my=0}) {
  return (
    <div className="mockup-wrap" style={{position:"absolute",right:"-20px",top:"50%",transform:"translateY(-50%)",width:"480px",height:"340px",perspective:"1400px",pointerEvents:"none",zIndex:1}}>

      {/* Layer 0 — back panel, most depth */}
      <div style={{
        position:"absolute",inset:"24px 0 0 60px",borderRadius:"14px",
        background:"rgba(12,12,18,0.55)",
        border:".5px solid rgba(255,255,255,0.045)",
        transform:`perspective(1400px) rotateY(-14deg) rotateX(5deg) translate3d(${mx*1.2}px,${my*0.9}px,0px)`,
        transition:"transform .14s linear",
        boxShadow:"0 48px 96px rgba(0,0,0,.75),0 1px 0 rgba(255,255,255,.04) inset",
        overflow:"hidden",
        willChange:"transform",
      }}>
        {/* Window chrome */}
        <div style={{height:"34px",borderBottom:".5px solid rgba(255,255,255,0.05)",display:"flex",alignItems:"center",padding:"0 14px",gap:"6px",background:"rgba(0,0,0,.2)"}}>
          {[0,1,2].map(i=><div key={i} style={{width:"8px",height:"8px",borderRadius:"50%",background:"rgba(255,255,255,0.07)"}}/>)}
          <div style={{flex:1,height:"1px",background:"rgba(255,255,255,0.04)",marginLeft:"12px",borderRadius:"1px"}}/>
        </div>
        {/* Table rows */}
        {[{w:78,g:true},{w:55,g:false},{w:72,g:true},{w:45,g:false},{w:63,g:false}].map(({w,g},i)=>(
          <div key={i} style={{display:"flex",alignItems:"center",gap:"10px",padding:"9px 14px",borderBottom:".5px solid rgba(255,255,255,.025)",background:g?"rgba(79,126,255,0.025)":"transparent"}}>
            <div style={{width:"26px",height:"26px",borderRadius:"6px",background:"rgba(79,126,255,0.09)",flexShrink:0}}/>
            <div style={{flex:1}}>
              <div style={{height:"6px",borderRadius:"3px",background:"rgba(255,255,255,0.07)",width:`${w}%`,marginBottom:"5px"}}/>
              <div style={{height:"4px",borderRadius:"3px",background:"rgba(255,255,255,0.03)",width:`${w*0.55}%`}}/>
            </div>
            <div style={{width:"38px",height:"18px",borderRadius:"100px",background:g?"rgba(79,126,255,0.18)":"rgba(255,255,255,0.04)",flexShrink:0}}/>
          </div>
        ))}
      </div>

      {/* Layer 1 — mid floating card */}
      <div style={{
        position:"absolute",left:"-10px",top:"48px",width:"190px",
        borderRadius:"12px",
        background:"rgba(15,15,22,0.88)",
        border:".5px solid rgba(79,126,255,0.18)",
        padding:"18px 20px",
        transform:`perspective(1400px) rotateY(-9deg) rotateX(3.5deg) translate3d(${mx*5}px,${my*3.5}px,28px)`,
        transition:"transform .14s linear",
        boxShadow:"0 24px 52px rgba(0,0,0,.65),0 1px 0 rgba(255,255,255,.06) inset",
        animation:"floatA 6.5s ease-in-out infinite",
        willChange:"transform",
      }}>
        <div style={{fontSize:"10px",color:C.textTer,letterSpacing:".08em",textTransform:"uppercase",marginBottom:"10px",fontFamily:"'Courier New',monospace"}}>Leads heute</div>
        <div style={{fontSize:"30px",fontWeight:500,color:C.textPri,letterSpacing:"-.03em",lineHeight:1}}>+47</div>
        <div style={{fontSize:"11px",color:"#4ADE80",marginTop:"6px",display:"flex",alignItems:"center",gap:"5px"}}>
          <span>↑ 23%</span><span style={{color:C.textTer}}>vs. gestern</span>
        </div>
        <div style={{marginTop:"14px",height:"34px",display:"flex",alignItems:"flex-end",gap:"3px"}}>
          {[38,52,34,68,48,82,60].map((h,i)=>(
            <div key={i} style={{flex:1,height:`${h}%`,borderRadius:"2px 2px 0 0",background:i===5?C.accent:"rgba(79,126,255,0.2)"}}/>
          ))}
        </div>
      </div>

      {/* Layer 2 — front status chip, closest to viewer */}
      <div style={{
        position:"absolute",right:"30px",bottom:"44px",
        borderRadius:"10px",
        background:"rgba(11,20,46,0.92)",
        border:".5px solid rgba(79,126,255,0.28)",
        padding:"11px 15px",
        display:"flex",alignItems:"center",gap:"10px",
        transform:`perspective(1400px) rotateY(-6deg) rotateX(2deg) translate3d(${mx*9}px,${my*6}px,56px)`,
        transition:"transform .14s linear",
        boxShadow:"0 14px 36px rgba(0,0,0,.6),0 1px 0 rgba(255,255,255,.07) inset",
        animation:"floatB 7.5s ease-in-out infinite",
        minWidth:"195px",
        willChange:"transform",
      }}>
        <div style={{width:"26px",height:"26px",borderRadius:"50%",background:"rgba(79,126,255,0.18)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"12px",flexShrink:0,color:C.accentLt}}>✓</div>
        <div>
          <div style={{fontSize:"12px",fontWeight:500,color:C.textPri,marginBottom:"2px"}}>Voice Agent aktiv</div>
          <div style={{fontSize:"10px",color:C.textTer}}>3 Anrufe laufen gerade</div>
        </div>
        <div style={{width:"6px",height:"6px",borderRadius:"50%",background:"#4ADE80",flexShrink:0,boxShadow:"0 0 6px rgba(74,222,128,0.55)"}}/>
      </div>
    </div>
  );
}

/* ─── Navbar ─────────────────────────────────────────────────── */
function Navbar({scrolled}) {
  const links=["Leistungen","Prozess","Ergebnisse","Kontakt"];
  return (
    <nav style={{position:"fixed",top:0,left:0,right:0,height:"64px",display:"flex",alignItems:"center",justifyContent:"space-between",padding:"0 48px",borderBottom:`0.5px solid ${scrolled?"#1A1A22":"transparent"}`,background:scrolled?"rgba(11,11,15,0.88)":"transparent",backdropFilter:scrolled?"blur(14px)":"none",zIndex:100,transition:"background .35s,border-color .35s"}}>
      <div style={{fontSize:"14px",fontWeight:600,color:C.textPri,letterSpacing:".04em"}}>JHFLOW</div>
      <div className="hide-mobile" style={{display:"flex",gap:"32px",alignItems:"center"}}>
        {links.map(l=><a key={l} href={`#${l.toLowerCase()}`} className="nav-link" style={{fontSize:"13px",fontWeight:500,letterSpacing:".005em"}}>{l}</a>)}
        <a href="#kontakt" style={{fontSize:"12px",fontWeight:500,color:C.accent,textDecoration:"none",transition:"opacity .15s"}} onMouseEnter={e=>e.target.style.opacity=".7"} onMouseLeave={e=>e.target.style.opacity="1"}>Beratung buchen →</a>
      </div>
    </nav>
  );
}

/* ─── Hero ───────────────────────────────────────────────────── */
function Hero() {
  const {display,done}=useTyped(TYPED_WORDS);
  const mouse=useMouseParallax(1);
  const services=["Webdesign","AI Chatbots","Voice Agents","CRM","Automations","Lead-Systeme"];

  return (
    <section style={{minHeight:"100vh",display:"flex",alignItems:"center",position:"relative",overflow:"hidden",paddingTop:"64px"}}>
      <GridBg mx={mouse.x} my={mouse.y}/>
      <DashboardMockup mx={mouse.x} my={mouse.y}/>

      <div className="hero-content" style={{position:"relative",zIndex:2,maxWidth:"560px",padding:"0 48px",margin:"0"}}>
        <div className="fu0" style={{marginBottom:"22px"}}>
          <span style={{display:"inline-flex",alignItems:"center",gap:"7px",fontSize:"11px",fontWeight:600,letterSpacing:".12em",textTransform:"uppercase",color:C.accent,padding:"5px 12px",background:C.accentTint,border:`.5px solid ${C.accentMid}`,borderRadius:"100px"}}>
            <span style={{width:"5px",height:"5px",borderRadius:"50%",background:C.accent}}/>
            JHFLOW · AI Systems & Webdesign
          </span>
        </div>

        <h1 className="fu1 hero-h1" style={{fontSize:"clamp(40px,6vw,70px)",fontWeight:500,letterSpacing:"-.035em",lineHeight:1.01,color:C.textPri,marginBottom:"2px"}}>Wir bauen</h1>
        <div className="fu2 hero-h1" style={{fontSize:"clamp(40px,6vw,70px)",fontWeight:500,letterSpacing:"-.035em",lineHeight:1.01,color:C.textPri,minHeight:"1.06em",display:"flex",alignItems:"baseline",marginBottom:"28px"}}>
          <span>{display}</span>
          <span style={{display:"inline-block",width:"3px",height:".82em",background:done?"transparent":C.accent,marginLeft:"3px",verticalAlign:"middle",borderRadius:"1px",animation:done?"none":"blink 1.1s step-end infinite",transition:"background .3s"}}/>
        </div>

        <p className="fu3" style={{fontSize:"17px",fontWeight:300,lineHeight:1.72,color:C.textTer,letterSpacing:"-.005em",maxWidth:"420px",marginBottom:"40px"}}>
          Automatisierung, die verkauft. Systeme, die arbeiten —<br/>auch wenn Sie es nicht tun.
        </p>

        <div className="fu4">
          <a href="#kontakt" className="cta-btn cta-full" style={{display:"inline-flex",alignItems:"center",gap:"10px",background:C.accent,color:"#fff",textDecoration:"none",borderRadius:"8px",padding:"13px 28px",fontSize:"14px",fontWeight:500,letterSpacing:".01em"}}>
            Kostenlose Beratung buchen <span style={{fontSize:"15px"}}>→</span>
          </a>
        </div>

        <div className="fu5" style={{marginTop:"44px",display:"flex",alignItems:"center",gap:"10px",flexWrap:"wrap"}}>
          <span style={{fontSize:"11px",color:C.textDis,letterSpacing:".05em",fontWeight:500}}>Bereiche</span>
          {services.map(s=>(
            <span key={s} style={{display:"flex",alignItems:"center",gap:"10px"}}>
              <span style={{width:"3px",height:"3px",borderRadius:"50%",background:"#1E1E28"}}/>
              <span style={{fontSize:"12px",color:C.textTer}}>{s}</span>
            </span>
          ))}
        </div>
      </div>

      <div style={{position:"absolute",bottom:"32px",left:"50%",transform:"translateX(-50%)",display:"flex",flexDirection:"column",alignItems:"center",gap:"6px",opacity:.28}} className="fu5">
        <span style={{fontSize:"10px",letterSpacing:".1em",color:C.textTer,textTransform:"uppercase",fontWeight:500}}>Scroll</span>
        <div style={{width:".5px",height:"28px",background:`linear-gradient(to bottom,${C.textTer},transparent)`}}/>
      </div>
    </section>
  );
}

/* ─── Problem ────────────────────────────────────────────────── */
function Problem() {
  const {ref,visible}=useReveal(0.08);
  const items=[
    {n:"01",title:"Manuelle Prozesse bremsen Wachstum",body:"Leads bleiben liegen. Anfragen werden zu spät beantwortet. Vertrieb verbringt Zeit mit Aufgaben, die Systeme erledigen könnten."},
    {n:"02",title:"Digitale Präsenz ohne Wirkung",body:"Eine Website, die nicht konvertiert, ist kein Asset — sie ist Kulisse. Ohne klare Struktur und Conversion-Logik verpufft jedes Budget."},
    {n:"03",title:"Kein System hinter dem Vertrieb",body:"Ohne CRM, Automatisierung und qualifizierte Lead-Pipelines bleibt Umsatz dem Zufall überlassen. Das lässt sich ändern."},
  ];
  return (
    <section id="problem" ref={ref} className="sec" style={{padding:"96px 48px",maxWidth:"1100px",margin:"0 auto"}}>
      <div style={fadeUp(visible)}>
        <Eyebrow>Das Problem</Eyebrow>
        <h2 style={{fontSize:"clamp(28px,4vw,44px)",fontWeight:500,letterSpacing:"-.025em",color:C.textPri,lineHeight:1.1,marginBottom:"56px",maxWidth:"560px"}}>Was die meisten<br/>Unternehmen bremst</h2>
        <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:"16px"}} className="grid-3">
          {items.map(({n,title,body},i)=>(
            <div key={n} className="card-hover" style={{background:C.surface,border:`.5px solid ${C.border}`,borderRadius:"12px",padding:"28px",position:"relative",overflow:"hidden",transitionDelay:`${i*60}ms`}}>
              <div style={{position:"absolute",top:0,left:"16px",right:"16px",height:".5px",background:"linear-gradient(to right,transparent,rgba(255,255,255,0.06),transparent)"}}/>
              <div style={{fontFamily:"'Courier New',monospace",fontSize:"11px",color:C.accentLt,marginBottom:"16px",letterSpacing:".06em"}}>{n}</div>
              <h3 style={{fontSize:"15px",fontWeight:500,color:C.textPri,lineHeight:1.4,marginBottom:"10px"}}>{title}</h3>
              <p style={{fontSize:"13px",color:C.textSec,lineHeight:1.7}}>{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Services ───────────────────────────────────────────────── */
function Services() {
  const {ref,visible}=useReveal(0.06);
  const services=[
    {icon:"◈",title:"Webdesign",sub:"Premium-Websites",body:"Kein Template. Kein Baukasten. Individuelle Websites, die Vertrauen schaffen und Besucher in Anfragen verwandeln."},
    {icon:"◉",title:"AI Chatbots",sub:"24/7 Qualifizierung",body:"Intelligente Chatbots, die qualifizieren, antworten und buchen — ohne menschliches Intervention bei Standardanfragen."},
    {icon:"◎",title:"AI Voice Agents",sub:"Ausgehende Anrufe",body:"KI-gestützte Sprachagenten für Outbound-Vertrieb, Terminvereinbarung und Lead-Nachverfolgung. Skalierbar ab Tag eins."},
    {icon:"▣",title:"CRM-Systeme",sub:"Zentralisierte Pipeline",body:"Aufbau und Implementierung von CRM-Systemen, die Leads erfassen, priorisieren und den Vertrieb strukturieren."},
    {icon:"⬡",title:"Workflow Automations",sub:"Prozesse verbinden",body:"Automatisierte Workflows zwischen Tools, Teams und Systemen. Weniger manuelle Arbeit, mehr Konsistenz."},
    {icon:"◆",title:"Lead-Systeme",sub:"Strukturierter Eingang",body:"Lead-Capturing, Scoring und Routing — abgestimmt auf Ihren Vertriebsprozess. Kein Lead geht mehr verloren."},
  ];
  return (
    <section id="leistungen" ref={ref} style={{background:C.surface,borderTop:`.5px solid ${C.border}`,borderBottom:`.5px solid ${C.border}`}}>
      <div className="sec" style={{maxWidth:"1100px",margin:"0 auto",padding:"96px 48px"}}>
        <div style={fadeUp(visible)}>
          <Eyebrow>Leistungen</Eyebrow>
          <h2 style={{fontSize:"clamp(28px,4vw,44px)",fontWeight:500,letterSpacing:"-.025em",color:C.textPri,lineHeight:1.1,marginBottom:"56px",maxWidth:"520px"}}>Sechs Systeme.<br/>Ein Ziel: Wachstum.</h2>
          <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:"12px"}} className="grid-3">
            {services.map(({icon,title,sub,body},i)=>(
              <div key={title} className="card-hover" style={{background:C.pageBg,border:`.5px solid ${C.border}`,borderRadius:"12px",padding:"28px",cursor:"default",position:"relative",overflow:"hidden",transitionDelay:`${i*40}ms`}}>
                <div style={{position:"absolute",top:0,left:"16px",right:"16px",height:".5px",background:"linear-gradient(to right,transparent,rgba(255,255,255,0.05),transparent)"}}/>
                <div style={{fontSize:"20px",color:C.accent,marginBottom:"16px",lineHeight:1}}>{icon}</div>
                <div style={{display:"flex",alignItems:"baseline",gap:"10px",marginBottom:"10px"}}>
                  <h3 style={{fontSize:"15px",fontWeight:500,color:C.textPri}}>{title}</h3>
                  <span style={{fontSize:"11px",color:C.textTer}}>{sub}</span>
                </div>
                <p style={{fontSize:"13px",color:C.textSec,lineHeight:1.7}}>{body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Process ────────────────────────────────────────────────── */
function Process() {
  const {ref,visible}=useReveal(0.08);
  const steps=[
    {n:"01",title:"Analyse & Strategie",body:"Wir verstehen Ihr Geschäft, Ihre Ziele und wo der größte Hebel liegt. Kein generisches Paket — sondern ein konkreter Plan."},
    {n:"02",title:"Aufbau & Integration",body:"Die Systeme werden gebaut, konfiguriert und in Ihre bestehenden Prozesse integriert. Transparent, termingerecht, dokumentiert."},
    {n:"03",title:"Launch & Optimierung",body:"Go-live mit Monitoring. Nach dem Start wird gemessen, was funktioniert — und kontinuierlich verbessert."},
  ];
  return (
    <section id="prozess" ref={ref} className="sec" style={{padding:"96px 48px",maxWidth:"1100px",margin:"0 auto"}}>
      <div style={fadeUp(visible)}>
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"80px",alignItems:"start"}} className="grid-2">
          <div>
            <Eyebrow>Prozess</Eyebrow>
            <h2 style={{fontSize:"clamp(28px,4vw,44px)",fontWeight:500,letterSpacing:"-.025em",color:C.textPri,lineHeight:1.1,marginBottom:"20px"}}>Wie wir<br/>zusammenarbeiten</h2>
            <p style={{fontSize:"15px",fontWeight:300,color:C.textSec,lineHeight:1.75,maxWidth:"380px"}}>Von der ersten Analyse bis zum laufenden System arbeiten wir strukturiert, direkt und ohne Overhead.</p>
          </div>
          <div style={{display:"flex",flexDirection:"column"}}>
            {steps.map(({n,title,body},i)=>(
              <div key={n} className={i<steps.length-1?"step-line":""} style={{position:"relative",display:"flex",gap:"20px",paddingBottom:i<steps.length-1?"32px":"0"}}>
                <div style={{flexShrink:0,width:"38px",height:"38px",borderRadius:"50%",background:C.surface,border:`.5px solid ${C.borderEm}`,display:"flex",alignItems:"center",justifyContent:"center",fontFamily:"'Courier New',monospace",fontSize:"10px",color:C.accentLt,letterSpacing:".06em",zIndex:1,boxShadow:"0 2px 10px rgba(0,0,0,.45),0 1px 0 rgba(255,255,255,.04) inset"}}>{n}</div>
                <div style={{paddingTop:"8px"}}>
                  <h3 style={{fontSize:"14px",fontWeight:500,color:C.textPri,marginBottom:"6px"}}>{title}</h3>
                  <p style={{fontSize:"13px",color:C.textSec,lineHeight:1.65}}>{body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Results ────────────────────────────────────────────────── */
function Results() {
  const {ref,visible}=useReveal(0.06);
  const stats=[
    {value:"3×",label:"mehr qualifizierte Leads",note:"durch automatisierte Qualifizierung"},
    {value:"<2s",label:"Reaktionszeit",note:"KI-gestützte Erstantwort"},
    {value:"94%",label:"Qualifizierungsrate",note:"AI Chatbot Durchschnitt"},
    {value:"–60%",label:"manuelle Aufgaben",note:"durch Workflow-Automatisierung"},
  ];
  const cases=[
    {sector:"E-Commerce",result:"Bestellabbrüche um 34% reduziert durch automatisierten Chatbot mit Produkt-Empfehlungslogik und Re-Engagement-Sequenzen."},
    {sector:"B2B Vertrieb",result:"Von 12 auf 58 qualifizierte Gespräche pro Monat durch Outbound Voice Agent und automatisierte Lead-Pipeline."},
  ];
  return (
    <section id="ergebnisse" ref={ref} style={{background:C.surface,borderTop:`.5px solid ${C.border}`,borderBottom:`.5px solid ${C.border}`}}>
      <div className="sec" style={{maxWidth:"1100px",margin:"0 auto",padding:"96px 48px"}}>
        <div style={fadeUp(visible)}>
          <Eyebrow>Ergebnisse</Eyebrow>
          <h2 style={{fontSize:"clamp(28px,4vw,44px)",fontWeight:500,letterSpacing:"-.025em",color:C.textPri,lineHeight:1.1,marginBottom:"56px",maxWidth:"480px"}}>Zahlen, die<br/>für sich sprechen.</h2>
          <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:"10px",marginBottom:"48px"}} className="stats-grid">
            {stats.map(({value,label,note},i)=>(
              <div key={value} className="stat-card" style={{background:C.pageBg,border:`.5px solid ${C.border}`,borderRadius:"10px",padding:"24px 22px",position:"relative",overflow:"hidden",transitionDelay:`${i*50}ms`}}>
                <div style={{position:"absolute",top:0,left:"10px",right:"10px",height:".5px",background:"linear-gradient(to right,transparent,rgba(255,255,255,0.06),transparent)"}}/>
                <div style={{fontSize:"36px",fontWeight:500,letterSpacing:"-.03em",color:C.textPri,lineHeight:1,marginBottom:"8px"}}>{value}</div>
                <div style={{fontSize:"13px",fontWeight:500,color:C.textSec,marginBottom:"4px"}}>{label}</div>
                <div style={{fontFamily:"'Courier New',monospace",fontSize:"10px",color:C.textTer,letterSpacing:".03em"}}>{note}</div>
              </div>
            ))}
          </div>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"12px"}} className="grid-2">
            {cases.map(({sector,result},i)=>(
              <div key={sector} className="card-hover" style={{background:C.pageBg,border:`.5px solid ${C.border}`,borderRadius:"12px",padding:"28px",position:"relative",overflow:"hidden",transitionDelay:`${i*60}ms`}}>
                <div style={{position:"absolute",top:0,left:"16px",right:"16px",height:".5px",background:"linear-gradient(to right,transparent,rgba(255,255,255,0.05),transparent)"}}/>
                <div style={{display:"inline-flex",alignItems:"center",gap:"7px",fontSize:"11px",fontWeight:600,letterSpacing:".08em",textTransform:"uppercase",color:C.accentLt,background:C.accentTint,border:`.5px solid ${C.accentMid}`,borderRadius:"100px",padding:"3px 10px",marginBottom:"14px"}}>{sector}</div>
                <p style={{fontSize:"14px",color:C.textSec,lineHeight:1.7}}>{result}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── CTA + Form ─────────────────────────────────────────────── */
function CTASection() {
  const [email,setEmail]=useState("");
  const [status,setStatus]=useState("idle");
  const {ref,visible}=useReveal(0.15);
  const handleSubmit=(e)=>{
    e.preventDefault();
    if(!email||!email.includes("@")){setStatus("error");return;}
    setStatus("sending");
    setTimeout(()=>setStatus("done"),1000);
  };
  return (
    <section id="kontakt" className="sec" style={{padding:"120px 48px",maxWidth:"1100px",margin:"0 auto"}}>
      <div ref={ref} style={{textAlign:"center",...fadeUp(visible)}}>
        <Eyebrow>Kostenloses Erstgespräch</Eyebrow>
        <h2 style={{fontSize:"clamp(28px,5vw,52px)",fontWeight:500,letterSpacing:"-.03em",color:C.textPri,lineHeight:1.08,marginBottom:"18px",maxWidth:"600px",marginLeft:"auto",marginRight:"auto"}}>Bereit, wenn<br/>Sie es sind.</h2>
        <p style={{fontSize:"16px",fontWeight:300,color:C.textTer,lineHeight:1.7,maxWidth:"440px",margin:"0 auto 48px"}}>
          Kein Pitch. Kein Overhead. Ein strukturiertes Gespräch über das, was in Ihrem Unternehmen möglich ist.
        </p>
        {status==="done"?(
          <div style={{display:"inline-flex",alignItems:"center",gap:"10px",padding:"16px 28px",background:"rgba(74,222,128,0.06)",border:".5px solid rgba(74,222,128,0.2)",borderRadius:"10px",boxShadow:"0 4px 24px rgba(0,0,0,.35)"}}>
            <span style={{color:"#4ADE80",fontSize:"14px"}}>✓</span>
            <span style={{fontSize:"14px",color:C.textSec}}>Danke — wir melden uns innerhalb von 24 Stunden.</span>
          </div>
        ):(
          <form onSubmit={handleSubmit} style={{display:"flex",maxWidth:"480px",margin:"0 auto",border:`.5px solid ${status==="error"?"#E24B4A55":C.borderEm}`,borderRadius:"10px",overflow:"hidden",transition:"border-color .2s",boxShadow:"0 4px 28px rgba(0,0,0,.4),0 1px 0 rgba(255,255,255,.04) inset"}} className="form-stack">
            <input type="email" value={email} onChange={e=>{setEmail(e.target.value);setStatus("idle");}} placeholder="ihre@email.de" style={{flex:1,background:C.surface,border:"none",padding:"14px 18px",fontSize:"14px",fontFamily:"'Inter',sans-serif",color:C.textPri,outline:"none",minWidth:0}}/>
            <button type="submit" className="cta-btn" disabled={status==="sending"} style={{background:C.accent,color:"#fff",border:"none",padding:"14px 22px",fontSize:"13px",fontWeight:500,fontFamily:"'Inter',sans-serif",cursor:"pointer",whiteSpace:"nowrap",flexShrink:0,display:"flex",alignItems:"center",gap:"8px"}}>
              {status==="sending"&&<span style={{display:"inline-block",width:"12px",height:"12px",border:"1.5px solid rgba(255,255,255,.3)",borderTopColor:"#fff",borderRadius:"50%",animation:"spin .7s linear infinite"}}/>}
              Beratung buchen →
            </button>
          </form>
        )}
        {status==="error"&&<p style={{fontSize:"12px",color:"#E24B4A",marginTop:"8px"}}>Bitte geben Sie eine gültige E-Mail-Adresse ein.</p>}
        <p style={{fontSize:"11px",color:C.textDis,marginTop:"16px",letterSpacing:".02em"}}>Kein Spam. Kein Newsletter. Nur ein Gespräch.</p>
      </div>
    </section>
  );
}

/* ─── Footer ─────────────────────────────────────────────────── */
function Footer() {
  return (
    <footer style={{borderTop:`.5px solid ${C.border}`,padding:"28px 48px",display:"flex",alignItems:"center",justifyContent:"space-between",flexWrap:"wrap",gap:"16px",maxWidth:"1100px",margin:"0 auto"}}>
      <div style={{fontSize:"13px",fontWeight:600,color:C.textTer,letterSpacing:".04em"}}>JHFLOW</div>
      <div style={{display:"flex",gap:"28px",flexWrap:"wrap"}}>
        {["Impressum","Datenschutz","AGB"].map(l=>(
          <a key={l} href="#" style={{fontSize:"12px",color:C.textTer,textDecoration:"none",transition:"color .15s"}} onMouseEnter={e=>e.target.style.color=C.textSec} onMouseLeave={e=>e.target.style.color=C.textTer}>{l}</a>
        ))}
      </div>
      <div style={{fontSize:"12px",color:C.textDis}}>© 2025 JHFLOW. Alle Rechte vorbehalten.</div>
    </footer>
  );
}

/* ─── App ────────────────────────────────────────────────────── */
export default function App() {
  const [scrolled,setScrolled]=useState(false);
  useEffect(()=>{
    const h=()=>setScrolled(window.scrollY>20);
    window.addEventListener("scroll",h,{passive:true});
    return ()=>window.removeEventListener("scroll",h);
  },[]);
  return (
    <>
      <style>{GLOBAL_CSS}</style>
      <div style={{fontFamily:"'Inter',-apple-system,sans-serif",background:C.pageBg,color:C.textPri,minHeight:"100vh"}}>
        <Navbar scrolled={scrolled}/>
        <Hero/>
        <Problem/>
        <Services/>
        <Process/>
        <Results/>
        <CTASection/>
        <Footer/>
      </div>
    </>
  );
}
