import React from 'react';
import { Mail, Phone, Github, MapPin, Code, Database, Palette, Heart, Star, Terminal } from 'lucide-react';

const CV = () => {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800">
      {/* Header / Hero Section */}
      <header className="bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-lg">
        <div className="container mx-auto px-6 py-12 md:py-16 flex flex-col md:flex-row items-center justify-between">
          <div className="text-center md:text-left space-y-4">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
              Sunshine Wilmus
            </h1>
            <p className="text-xl md:text-2xl text-violet-100 font-medium">
              Étudiant en Informatique & Passionné d'Automatisation
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-4 text-sm font-medium">
              <span className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm cursor-default">
                <MapPin size={16} /> Charleroi, Belgique
              </span>
              <a 
                href="mailto:sunshine.wilmus.mail@gmail.com" 
                className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm hover:bg-white/20 transition-colors cursor-pointer"
                title="Envoyer un email"
              >
                <Mail size={16} /> sunshine.wilmus.mail@gmail.com
              </a>
              <a 
                href="tel:+32456400032" 
                className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm hover:bg-white/20 transition-colors cursor-pointer"
                title="Appeler"
              >
                <Phone size={16} /> +32 456 40 00 32
              </a>
            </div>
          </div>
          

        </div>
      </header>

      <main className="container mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Left Column: Skills & Info */}
        <div className="space-y-8">
          
          {/* Profil */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
            <h3 className="text-xl font-bold text-violet-700 mb-4 flex items-center gap-2">
              <Heart className="w-5 h-5" /> Profil
            </h3>
            <p className="text-slate-600 leading-relaxed">
              Étudiant en rhéto (Technique de Transition Informatique), je suis un développeur autodidacte ultra-motivé. Mon objectif ? Découvrir le monde de l'entreprise avant de plonger dans l'aventure de l'École 42.
            </p>
          </div>

          {/* Hard Skills */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
            <h3 className="text-xl font-bold text-violet-700 mb-4 flex items-center gap-2">
              <Code className="w-5 h-5" /> Compétences Tech
            </h3>
            
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-1">
                  <span className="font-medium text-slate-700">Python & Scripting</span>
                  <span className="text-xs text-violet-500 font-bold">Avancé</span>
                </div>
                <div className="w-full bg-slate-100 rounded-full h-2">
                  <div className="bg-violet-500 h-2 rounded-full" style={{ width: '85%' }}></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-1">
                  <span className="font-medium text-slate-700">Web (HTML/CSS/React)</span>
                  <span className="text-xs text-violet-500 font-bold">Intermédiaire</span>
                </div>
                <div className="w-full bg-slate-100 rounded-full h-2">
                  <div className="bg-violet-500 h-2 rounded-full" style={{ width: '70%' }}></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-1">
                  <span className="font-medium text-slate-700">C (Prépa 42)</span>
                  <span className="text-xs text-violet-500 font-bold">En cours</span>
                </div>
                <div className="w-full bg-slate-100 rounded-full h-2">
                  <div className="bg-violet-500 h-2 rounded-full" style={{ width: '60%' }}></div>
                </div>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {['Git', 'VS Code', 'Notion', 'Photoshop', 'Illustrator', 'PHP'].map((skill) => (
                <span key={skill} className="px-3 py-1 bg-violet-50 text-violet-700 text-xs font-semibold rounded-lg border border-violet-100">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Languages */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
            <h3 className="text-xl font-bold text-violet-700 mb-4 flex items-center gap-2">
              <Star className="w-5 h-5" /> Langues
            </h3>
            <ul className="space-y-2 text-slate-600">
              <li className="flex justify-between">
                <span>Français</span>
                <span className="font-medium text-slate-900">Langue maternelle</span>
              </li>
              <li className="flex justify-between">
                <span>Anglais</span>
                <span className="font-medium text-slate-900">Technique (B1/B2)</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Right Column: Projects & Experience */}
        <div className="md:col-span-2 space-y-8">

          {/* Projects Section */}
          <section>
            <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-2">
              <Database className="w-6 h-6 text-violet-600" /> Projets Personnels
            </h2>
            
            <div className="grid gap-6">
              {/* Project 1 */}
              <div className="group bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-all hover:border-violet-200">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-violet-600 transition-colors">
                      Gestion de Stock Automatisée
                    </h3>
                    <p className="text-sm text-slate-500 mb-3">Python, API Notion, Automatisation</p>
                  </div>
                  <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded font-bold">Top Projet</span>
                </div>
                <p className="text-slate-600 mb-4">
                  Développement complet d'un outil de gestion d'inventaire utilisant des lecteurs de codes-barres.
                  Le système synchronise automatiquement les stocks avec une base de données Notion et met à jour les annonces sur Vinted.
                </p>
                <div className="flex gap-2 text-xs font-medium text-slate-400 uppercase tracking-wider">
                  <span>#Python</span>
                  <span>#API</span>
                  <span>#Automation</span>
                </div>
              </div>

              {/* Project 2 */}
              <div className="group bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-all hover:border-violet-200">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-violet-600 transition-colors">
                      Clone Complet Discord
                    </h3>
                    <p className="text-sm text-slate-500 mb-3">HTML5, CSS3, JS, WebRTC</p>
                  </div>
                </div>
                <p className="text-slate-600 mb-4">
                  Développement d'un clone complet incluant la gestion des amis, la messagerie instantanée en temps réel et les appels vocaux/vidéo. Ce n'est pas qu'une interface, c'est une application totalement fonctionnelle.
                </p>
              </div>
            </div>
          </section>

          {/* Education Section */}
          <section>
            <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-2">
              <Terminal className="w-6 h-6 text-violet-600" /> Parcours Scolaire
            </h2>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 relative overflow-hidden">
               <div className="absolute top-0 left-0 w-1 h-full bg-violet-500"></div>
               <div className="pl-4">
                 <h3 className="text-lg font-bold text-slate-900">Technique de Transition Informatique</h3>
                 <p className="text-violet-600 font-medium">Institut Saint-André, Charleroi</p>
                 <p className="text-sm text-slate-400 mb-2">2023 – 2026 (En cours)</p>
                 <p className="text-slate-600">
                   Option Informatique de gestion et programmation. Préparation active aux tests de la piscine de l'École 42.
                 </p>
               </div>
            </div>
          </section>

           {/* Experience Section */}
           <section>
            <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-2">
              <Palette className="w-6 h-6 text-violet-600" /> Expérience Job Étudiant
            </h2>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                 <h3 className="text-lg font-bold text-slate-900">Moniteur / Animateur</h3>
                 <p className="text-violet-600 font-medium">Plaines de vacances, Charleroi</p>
                 <p className="text-sm text-slate-400 mb-4">Été 2021 – 2024</p>
                 <ul className="list-disc list-inside text-slate-600 space-y-1">
                   <li>Encadrement et animation de groupes d'enfants.</li>
                   <li>Gestion des conflits et des imprévus (excellent exercice de soft-skills).</li>
                   <li>Travail d'équipe et responsabilité de la sécurité du groupe.</li>
                 </ul>
            </div>
          </section>

        </div>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-8 mt-12 text-center">
        <p>© 2026 Sunshine Wilmus. Codé avec React & Tailwind.</p>
        <div className="flex justify-center gap-4 mt-4">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" title="GitHub"><Github size={20}/></a>
          <a href="mailto:sunshine.wilmus.mail@gmail.com" className="hover:text-white transition-colors" title="Email"><Mail size={20}/></a>
        </div>
      </footer>
    </div>
  );
};

export default CV;
