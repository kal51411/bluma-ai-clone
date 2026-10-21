import { useState } from 'react';
import { 
  Sparkles, 
  Play, 
  Layers, 
  Download, 
  Sliders, 
  CheckCircle2, 
  ArrowRight, 
  Coins, 
  Zap, 
  RefreshCw,
  Film,
  Music
} from 'lucide-react';

export default function App() {
  const [selectedTab, setSelectedTab] = useState<'editor' | 'ugc' | 'pricing'>('editor');
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('annual');
  const [activeModel, setActiveModel] = useState<string>('kling-avatar-v2');
  const [hookPrompt, setHookPrompt] = useState<string>('Stop scrolling! If you sell on TikTok Shop, here is how you scale 10x with AI video ads...');
  const [isExporting, setIsExporting] = useState<boolean>(false);
  const [exportProgress, setExportProgress] = useState<number>(0);
  const [exportComplete, setExportComplete] = useState<boolean>(false);

  // Model catalog reconstructed from REA analysis
  const models = [
    { id: 'kling-avatar-v2', name: 'Kling Avatar v2', maker: 'Kuaishou', cost: '$0.056/s', type: 'Talking Head' },
    { id: 'kling-lipsync', name: 'Kling Lip-Sync', maker: 'Kuaishou', cost: '$0.014/s', type: 'Sync Voice' },
    { id: 'minimax-h3', name: 'MiniMax H3 Turbo', maker: 'MiniMax', cost: '$0.08/req', type: 'Fast Video' },
    { id: 'wan-2.2', name: 'Wan 2.2 Animate', maker: 'Alibaba', cost: '$0.095/s', type: 'Motion Swap' },
    { id: 'gemini-omni', name: 'Gemini Omni Flash', maker: 'Google', cost: '$0.15/req', type: 'Multimodal' },
    { id: 'bria-erase', name: 'Bria Video Eraser', maker: 'Bria', cost: '$0.14/s', type: 'Object Erase' }
  ];

  const handleSimulateCsrExport = () => {
    setIsExporting(true);
    setExportProgress(0);
    setExportComplete(false);

    let current = 0;
    const interval = setInterval(() => {
      current += 10;
      setExportProgress(current);
      if (current >= 100) {
        clearInterval(interval);
        setIsExporting(false);
        setExportComplete(true);
      }
    }, 200);
  };

  return (
    <div className="min-h-screen bg-[#09090b] text-zinc-100 flex flex-col font-sans selection:bg-blue-600 selection:text-white">
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-blue-600/20 via-indigo-600/20 to-purple-600/20 border-b border-blue-500/20 py-2 px-4 text-center text-xs font-medium text-blue-400 flex items-center justify-center gap-2">
        <span className="flex h-2 w-2 rounded-full bg-blue-500 animate-pulse"></span>
        <span>Rebuilt from REA Reverse Engineering Intelligence • WebCodecs CSR Video Engine Active</span>
      </div>

      {/* Navigation Header */}
      <nav className="border-b border-zinc-800/80 bg-zinc-950/70 backdrop-blur-md sticky top-0 z-50 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2 cursor-pointer">
            <div className="h-8 w-8 rounded-lg bg-blue-600 flex items-center justify-center shadow-lg shadow-blue-500/30">
              <Sparkles className="h-4 w-4 text-white" />
            </div>
            <span className="text-xl font-bold tracking-tight text-white">Bluma</span>
          </div>

          <div className="hidden md:flex items-center gap-6 text-sm text-zinc-400">
            <button 
              onClick={() => setSelectedTab('editor')}
              className={`hover:text-white transition ${selectedTab === 'editor' ? 'text-white font-medium' : ''}`}>
              Studio Editor
            </button>
            <button 
              onClick={() => setSelectedTab('ugc')}
              className={`hover:text-white transition ${selectedTab === 'ugc' ? 'text-white font-medium' : ''}`}>
              AI UGC & Talking Head
            </button>
            <button 
              onClick={() => setSelectedTab('pricing')}
              className={`hover:text-white transition ${selectedTab === 'pricing' ? 'text-white font-medium' : ''}`}>
              Pricing
            </button>
            <a href="#models" className="hover:text-white transition">Model Registry</a>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden sm:flex items-center gap-1 px-3 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-xs text-zinc-300">
            <Coins className="h-3.5 w-3.5 text-amber-400" />
            <span>5,400 Tokens Available</span>
          </div>
          <button className="px-4 py-2 text-sm font-medium text-zinc-300 hover:text-white transition">Log in</button>
          <button className="px-4 py-2 text-sm font-medium rounded-full bg-white text-zinc-950 hover:bg-zinc-200 transition shadow-sm font-semibold">
            Get started
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative px-6 pt-16 pb-20 text-center max-w-5xl mx-auto flex flex-col items-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-6">
          <Zap className="h-3.5 w-3.5" /> Next-Gen Programmatic Video Ads
        </div>

        <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white mb-6 leading-tight">
          Create short-form video ads with <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent">Frontier AI</span>
        </h1>

        <p className="text-lg sm:text-xl text-zinc-400 max-w-2xl mb-10 leading-relaxed">
          Bluma helps creators, performance marketers, and DTC brands move from concept to finished short-form video variations with instant client-side rendering and multi-model AI synthesis.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <button 
            onClick={() => setSelectedTab('editor')}
            className="px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm transition shadow-lg shadow-blue-600/30 flex items-center gap-2">
            Launch Creative Studio <ArrowRight className="h-4 w-4" />
          </button>
          <button 
            onClick={() => setSelectedTab('pricing')}
            className="px-6 py-3 rounded-full bg-zinc-900 hover:bg-zinc-800 border border-zinc-700/80 text-zinc-300 font-semibold text-sm transition">
            View Pricing Plans
          </button>
        </div>
      </section>

      {/* Main Interactive Studio / Tabs */}
      <main className="max-w-6xl mx-auto px-6 w-full mb-24">
        {selectedTab === 'editor' && (
          <div className="rounded-2xl border border-zinc-800 bg-zinc-950/80 p-6 shadow-2xl relative overflow-hidden">
            <div className="flex flex-col lg:flex-row gap-6">
              {/* Left Workspace Panel */}
              <div className="w-full lg:w-1/3 flex flex-col gap-5">
                <div className="border-b border-zinc-800 pb-4">
                  <h3 className="text-base font-semibold text-white flex items-center gap-2">
                    <Sliders className="h-4 w-4 text-blue-400" /> Ad Remix Controls
                  </h3>
                  <p className="text-xs text-zinc-400 mt-1">Configure your hook swap and generative models.</p>
                </div>

                <div>
                  <label className="text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-2 block">
                    Select Frontier AI Model
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {models.slice(0, 4).map(m => (
                      <button
                        key={m.id}
                        onClick={() => setActiveModel(m.id)}
                        className={`text-left p-2.5 rounded-xl border text-xs transition ${
                          activeModel === m.id 
                            ? 'border-blue-500 bg-blue-500/10 text-white' 
                            : 'border-zinc-800 bg-zinc-900/60 text-zinc-400 hover:border-zinc-700'
                        }`}>
                        <div className="font-semibold text-zinc-200">{m.name}</div>
                        <div className="text-[10px] text-zinc-500 mt-0.5">{m.cost} • {m.maker}</div>
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-2 block">
                    AI Spoken Hook Script
                  </label>
                  <textarea
                    value={hookPrompt}
                    onChange={(e) => setHookPrompt(e.target.value)}
                    rows={4}
                    className="w-full p-3 rounded-xl bg-zinc-900/90 border border-zinc-800 text-xs text-zinc-200 focus:outline-none focus:border-blue-500 resize-none font-sans"
                    placeholder="Enter script for the first 3-5 seconds hook..."
                  />
                </div>

                <div className="pt-2 border-t border-zinc-800 flex items-center justify-between text-xs">
                  <span className="text-zinc-400">Estimated Cost:</span>
                  <div className="flex items-center gap-1 font-semibold text-amber-400">
                    <Coins className="h-3 w-3" />
                    <span>84 Tokens (~$0.56 USD)</span>
                  </div>
                </div>

                <button 
                  onClick={handleSimulateCsrExport}
                  disabled={isExporting}
                  className="w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-500 disabled:opacity-50 text-white font-semibold text-xs transition flex items-center justify-center gap-2">
                  {isExporting ? (
                    <>
                      <RefreshCw className="h-3.5 w-3.5 animate-spin" />
                      Client WebCodecs Encoding ({exportProgress}%)...
                    </>
                  ) : (
                    <>
                      <Play className="h-3.5 w-3.5 fill-white" />
                      Render Ad Variation
                    </>
                  )}
                </button>
              </div>

              {/* Right Viewport Canvas / Preview */}
              <div className="w-full lg:w-2/3 bg-zinc-900/50 rounded-xl border border-zinc-800 flex flex-col overflow-hidden min-h-[460px]">
                {/* Viewport Header */}
                <div className="px-4 py-3 border-b border-zinc-800 flex items-center justify-between bg-zinc-950/40 text-xs text-zinc-400">
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-emerald-500"></span>
                    <span>1080 × 1920 (9:16 Vertical Ad Format)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="px-2 py-0.5 rounded bg-zinc-800 text-[10px] text-zinc-300">WebCodecs Active</span>
                    <span>30 FPS</span>
                  </div>
                </div>

                {/* Video Stage Simulation */}
                <div className="flex-1 flex items-center justify-center p-8 relative">
                  <div className="w-[240px] h-[426px] bg-zinc-950 rounded-2xl border-2 border-zinc-800 relative overflow-hidden shadow-2xl flex flex-col justify-between p-4 group">
                    {/* Simulated Video Background */}
                    <div className="absolute inset-0 bg-gradient-to-b from-blue-950/40 via-zinc-900 to-black z-0"></div>
                    
                    {/* Hook Overlay */}
                    <div className="relative z-10 flex justify-between items-start">
                      <span className="px-2 py-1 rounded bg-black/60 backdrop-blur-md text-[10px] font-semibold text-white border border-white/10">
                        HOOK: 0.0s - 4.5s
                      </span>
                      <span className="px-2 py-1 rounded bg-blue-600/80 text-[10px] font-semibold text-white">
                        AI Avatar v2
                      </span>
                    </div>

                    {/* Captions Kinetic Typography Preview */}
                    <div className="relative z-10 text-center my-auto px-2">
                      <div className="inline-block bg-amber-400 text-zinc-950 font-black text-sm px-2 py-1 rounded shadow-lg uppercase tracking-tight transform -rotate-1">
                        STOP SCROLLING!
                      </div>
                      <p className="text-xs font-bold text-white mt-2 drop-shadow-md leading-snug">
                        {hookPrompt.slice(0, 60)}...
                      </p>
                    </div>

                    {/* Timeline bar */}
                    <div className="relative z-10">
                      <div className="w-full bg-zinc-800 h-1.5 rounded-full overflow-hidden mb-1">
                        <div 
                          className="bg-blue-500 h-full transition-all duration-200"
                          style={{ width: `${exportProgress || 45}%` }}></div>
                      </div>
                      <div className="flex justify-between text-[9px] text-zinc-400">
                        <span>0:02</span>
                        <span>0:15</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Timeline Tracks Footer */}
                <div className="p-3 border-t border-zinc-800 bg-zinc-950/60 flex flex-col gap-2">
                  <div className="flex items-center gap-2 text-[11px] text-zinc-400">
                    <Film className="h-3.5 w-3.5 text-blue-400" />
                    <span className="w-20 font-medium">Video Track</span>
                    <div className="flex-1 h-5 bg-blue-500/20 border border-blue-500/40 rounded flex items-center px-2 text-[10px] text-blue-300">
                      Kling Avatar UGC Hook (0-4s) + B-Roll Body (4-15s)
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-[11px] text-zinc-400">
                    <Music className="h-3.5 w-3.5 text-purple-400" />
                    <span className="w-20 font-medium">Audio Track</span>
                    <div className="flex-1 h-5 bg-purple-500/20 border border-purple-500/40 rounded flex items-center px-2 text-[10px] text-purple-300">
                      ElevenLabs Voiceover + Background Lo-Fi Beat
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Export Success Notification */}
            {exportComplete && (
              <div className="mt-4 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-emerald-400" />
                  <div>
                    <div className="text-sm font-semibold text-emerald-300">Client-Side Export Completed!</div>
                    <div className="text-xs text-zinc-400">Rendered via WebCodecs and uploaded directly to S3 without server compute lag.</div>
                  </div>
                </div>
                <button className="px-4 py-2 rounded-lg bg-emerald-500 text-zinc-950 font-semibold text-xs hover:bg-emerald-400 transition flex items-center gap-1.5">
                  <Download className="h-3.5 w-3.5" /> Download MP4
                </button>
              </div>
            )}
          </div>
        )}

        {/* Pricing Tab */}
        {selectedTab === 'pricing' && (
          <div className="flex flex-col items-center">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-white mb-3">Simple, Transparent Token Pricing</h2>
              <p className="text-sm text-zinc-400 max-w-lg">
                Reconstructed from Bluma's token margins (150 tokens/$ on Starter, 144 tokens/$ on Pro). Cancel anytime.
              </p>

              {/* Billing Toggle */}
              <div className="mt-6 inline-flex p-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs">
                <button 
                  onClick={() => setBillingCycle('monthly')}
                  className={`px-4 py-1.5 rounded-full font-medium transition ${billingCycle === 'monthly' ? 'bg-zinc-800 text-white' : 'text-zinc-400'}`}>
                  Monthly
                </button>
                <button 
                  onClick={() => setBillingCycle('annual')}
                  className={`px-4 py-1.5 rounded-full font-medium transition flex items-center gap-1 ${billingCycle === 'annual' ? 'bg-zinc-800 text-white' : 'text-zinc-400'}`}>
                  Annual <span className="text-[10px] text-emerald-400 font-bold">20% OFF</span>
                </button>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6 w-full max-w-5xl">
              {/* Starter */}
              <div className="rounded-2xl border border-zinc-800 bg-zinc-950/70 p-6 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-white">Starter</h3>
                  <p className="text-xs text-zinc-400 mt-1">For creators shipping short-form ads.</p>
                  <div className="mt-4 mb-6">
                    <span className="text-3xl font-extrabold text-white">
                      ${billingCycle === 'annual' ? '29' : '36'}
                    </span>
                    <span className="text-xs text-zinc-400"> / month</span>
                  </div>
                  <ul className="space-y-3 text-xs text-zinc-300">
                    <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-blue-500" /> 5,400 monthly tokens</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-blue-500" /> All AI video models (Kling, Wan)</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-blue-500" /> WebCodecs Fast Export Engine</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-blue-500" /> 25GB Cloud Storage</li>
                  </ul>
                </div>
                <button className="mt-8 w-full py-2.5 rounded-xl border border-zinc-700 bg-zinc-900 hover:bg-zinc-800 font-semibold text-xs text-white transition">
                  Select Starter
                </button>
              </div>

              {/* Pro */}
              <div className="rounded-2xl border-2 border-blue-500 bg-zinc-950 p-6 flex flex-col justify-between relative shadow-xl shadow-blue-500/10">
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-blue-600 text-[10px] font-bold text-white uppercase tracking-wider">
                  Most Popular
                </span>
                <div>
                  <h3 className="text-lg font-bold text-white">Pro</h3>
                  <p className="text-xs text-zinc-400 mt-1">For growth teams and scaling media buyers.</p>
                  <div className="mt-4 mb-6">
                    <span className="text-3xl font-extrabold text-white">
                      ${billingCycle === 'annual' ? '79' : '99'}
                    </span>
                    <span className="text-xs text-zinc-400"> / month</span>
                  </div>
                  <ul className="space-y-3 text-xs text-zinc-300">
                    <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-blue-400" /> 14,256 monthly tokens</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-blue-400" /> Programmatic Bulk Variation Matrix</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-blue-400" /> Priority GPU Queue Access</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-blue-400" /> Automated Social Outreach CRM</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-blue-400" /> 100GB Cloud Storage</li>
                  </ul>
                </div>
                <button className="mt-8 w-full py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 font-semibold text-xs text-white transition shadow-lg shadow-blue-500/20">
                  Select Pro
                </button>
              </div>

              {/* Enterprise */}
              <div className="rounded-2xl border border-zinc-800 bg-zinc-950/70 p-6 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-white">Enterprise</h3>
                  <p className="text-xs text-zinc-400 mt-1">Custom pipelines and high-volume brands.</p>
                  <div className="mt-4 mb-6">
                    <span className="text-3xl font-extrabold text-white">$200+</span>
                    <span className="text-xs text-zinc-400"> / month</span>
                  </div>
                  <ul className="space-y-3 text-xs text-zinc-300">
                    <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-purple-400" /> Custom token allocations</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-purple-400" /> Dedicated REST & Webhook API</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-purple-400" /> Custom SLA & Dedicated Rep</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-purple-400" /> Unlimited Cloud Storage</li>
                  </ul>
                </div>
                <button className="mt-8 w-full py-2.5 rounded-xl border border-zinc-700 bg-zinc-900 hover:bg-zinc-800 font-semibold text-xs text-white transition">
                  Contact Sales
                </button>
              </div>
            </div>
          </div>
        )}

        {/* UGC & Talking Head Tab */}
        {selectedTab === 'ugc' && (
          <div className="rounded-2xl border border-zinc-800 bg-zinc-950/70 p-8 text-center max-w-3xl mx-auto">
            <div className="h-12 w-12 rounded-2xl bg-purple-500/10 border border-purple-500/20 text-purple-400 flex items-center justify-center mx-auto mb-4">
              <Layers className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Automated Multi-Model UGC Generator</h3>
            <p className="text-xs text-zinc-400 max-w-md mx-auto mb-6">
              Generate 10 distinct creator hooks with synchronized lip-sync from a single reference product link using Kling Avatar v2 and Claude Sonnet 5.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-left mb-6">
              <div className="p-4 rounded-xl border border-zinc-800 bg-zinc-900/40">
                <span className="text-xs font-semibold text-blue-400">1. Script Hook</span>
                <p className="text-[11px] text-zinc-400 mt-1">Direct-response hooks generated by Claude 3.5 Sonnet.</p>
              </div>
              <div className="p-4 rounded-xl border border-zinc-800 bg-zinc-900/40">
                <span className="text-xs font-semibold text-purple-400">2. Actor Lip-Sync</span>
                <p className="text-[11px] text-zinc-400 mt-1">Realistic talking head synthesized by Kling Avatar v2 ($0.056/s).</p>
              </div>
              <div className="p-4 rounded-xl border border-zinc-800 bg-zinc-900/40">
                <span className="text-xs font-semibold text-emerald-400">3. Auto-Stitch</span>
                <p className="text-[11px] text-zinc-400 mt-1">Direct WebCodecs canvas compositing into high-res MP4.</p>
              </div>
            </div>
            <button 
              onClick={() => setSelectedTab('editor')}
              className="px-6 py-2.5 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs transition">
              Open in Timeline Editor
            </button>
          </div>
        )}
      </main>

      {/* Model Catalog Grid */}
      <section id="models" className="border-t border-zinc-800/80 bg-zinc-950/40 py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-xl font-bold text-white">Reconstructed Frontier AI Stack</h2>
              <p className="text-xs text-zinc-400 mt-1">Direct API endpoints verified via REA reverse-engineering.</p>
            </div>
            <div className="text-xs text-zinc-500 font-mono">20-25% Target Gross Margin</div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {models.map(m => (
              <div key={m.id} className="p-4 rounded-xl border border-zinc-800/80 bg-zinc-900/30 hover:border-zinc-700 transition">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-zinc-200">{m.name}</span>
                  <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-blue-500/10 text-blue-400 border border-blue-500/20">
                    {m.type}
                  </span>
                </div>
                <div className="text-[11px] text-zinc-400">Provider: {m.maker}</div>
                <div className="mt-3 flex items-center justify-between text-xs pt-3 border-t border-zinc-800/60">
                  <span className="text-zinc-500">Wholesale Rate:</span>
                  <span className="font-mono font-semibold text-emerald-400">{m.cost}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-800 py-8 px-6 text-center text-xs text-zinc-500 mt-auto">
        <p>© 2026 Bluma Intelligence Architecture Clone. Reverse-engineered with REA MCP tools.</p>
      </footer>
    </div>
  );
}
