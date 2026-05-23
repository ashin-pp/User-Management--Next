import Link from "next/link"
import { Shield, Users, Database, LayoutDashboard, ArrowRight } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-sans relative overflow-hidden flex flex-col justify-between">
      {/* Background Orbs */}
      <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] rounded-full bg-purple-900/10 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] rounded-full bg-indigo-900/10 blur-[130px] pointer-events-none" />

      {/* Header */}
      <header className="max-w-7xl w-full mx-auto px-6 py-6 flex justify-between items-center z-10">
        <div className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-lg bg-gradient-to-tr from-purple-600 to-indigo-600 flex items-center justify-center shadow-md shadow-purple-500/20">
            <LayoutDashboard className="w-5 h-5 text-white" />
          </div>
          <span className="font-bold text-xl tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
            NextAdmin Pro
          </span>
        </div>

        <div className="flex items-center gap-4">
          <Link 
            href="/login" 
            className="text-sm font-medium text-gray-400 hover:text-white transition-colors"
          >
            Sign In
          </Link>
          <Link 
            href="/register" 
            className="text-sm font-semibold bg-white/10 hover:bg-white/15 border border-white/15 px-4 py-2 rounded-xl transition-all"
          >
            Get Started
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <main className="max-w-7xl w-full mx-auto px-6 py-16 flex-1 flex flex-col justify-center items-center text-center z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-semibold uppercase tracking-wider mb-6 animate-pulse">
          <Shield className="w-3.5 h-3.5" />
          Secure Enterprise Admin Portal
        </div>

        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight max-w-4xl leading-tight bg-clip-text text-transparent bg-gradient-to-b from-white via-gray-200 to-gray-500">
          Supercharge Your <br/>
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-violet-400 to-indigo-400">
            User Management Workflow
          </span>
        </h1>

        <p className="text-gray-400 text-lg md:text-xl max-w-2xl mt-6 leading-relaxed">
          A high-performance Next.js admin dashboard equipped with secure MongoDB integration, dynamic user listings, and premium glassmorphic control panels.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mt-10 justify-center w-full max-w-md sm:max-w-none">
          <Link href="/register" className="group">
            <button className="w-full sm:w-auto flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-200 shadow-xl shadow-purple-500/10 hover:shadow-purple-500/20 transform hover:scale-[1.02] cursor-pointer">
              Register New Account
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </Link>

          <Link href="/login">
            <button className="w-full sm:w-auto bg-[#161616] hover:bg-[#202020] border border-white/10 text-white font-semibold py-4 px-8 rounded-xl transition-all cursor-pointer">
              Access Admin Panel
            </button>
          </Link>
        </div>

        {/* Feature Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl w-full mt-24">
          <div className="bg-[#121212]/50 border border-white/5 rounded-2xl p-6 text-left hover:border-purple-500/30 transition-all duration-300">
            <div className="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-400 mb-4">
              <Shield className="w-5 h-5" />
            </div>
            <h3 className="font-semibold text-lg text-white mb-2">JWT Authentication</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Fully stateless cookie-based security protecting dashboard routes with bcrypt password hashing.
            </p>
          </div>

          <div className="bg-[#121212]/50 border border-white/5 rounded-2xl p-6 text-left hover:border-purple-500/30 transition-all duration-300">
            <div className="w-10 h-10 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-400 mb-4">
              <Users className="w-5 h-5" />
            </div>
            <h3 className="font-semibold text-lg text-white mb-2">Role Management</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Designated administrative functions to register, review, and control authenticated accounts.
            </p>
          </div>

          <div className="bg-[#121212]/50 border border-white/5 rounded-2xl p-6 text-left hover:border-purple-500/30 transition-all duration-300">
            <div className="w-10 h-10 rounded-xl bg-violet-500/10 flex items-center justify-center text-violet-400 mb-4">
              <Database className="w-5 h-5" />
            </div>
            <h3 className="font-semibold text-lg text-white mb-2">MongoDB Backend</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Seamless mongoose-driven data synchronization supporting lightning fast index queries.
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/5 py-8 z-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} NextAdmin Pro. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-gray-500">
            <span className="hover:text-gray-300 transition-colors">Privacy Policy</span>
            <span className="hover:text-gray-300 transition-colors">Terms of Service</span>
            <span className="hover:text-gray-300 transition-colors">Security</span>
          </div>
        </div>
      </footer>
    </div>
  )
}