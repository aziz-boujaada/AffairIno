// import React from 'react';

// // --- Importations des Images ---
// import b2bAfterWork from '../assets/eventsZone/b2bAfterWork.png';
// import BFC from '../assets/eventsZone/BFC.png';
// import chtoukaConnect from '../assets/eventsZone/chtoukaConnect.png';
// import ecta from '../assets/eventsZone/ecta.png';
// import fanZone from '../assets/eventsZone/fanZone.png';
// import glissa from '../assets/eventsZone/glissa.png';
// import morocco from '../assets/eventsZone/morocco.png';
// import siac from '../assets/eventsZone/siac.png';
// import tawsna from '../assets/eventsZone/tawsna.png';

// import azura from '../assets/freindZone/azura.png';
// import bozarHome from '../assets/freindZone/bozarHome.png';
// import devlopmentPartner from '../assets/freindZone/devlopmentPartner.png';
// import exclusuve from '../assets/freindZone/exclusuve.png';
// import hanny from '../assets/freindZone/hanny.png';
// import innovationCity from '../assets/freindZone/innovationCity.png';
// import justCargoFriend from '../assets/freindZone/justCargo.png';
// import optiMall from '../assets/freindZone/optiMall.png';
// import primePlan from '../assets/freindZone/primePlan.png';
// import stayLiving from '../assets/freindZone/stayLiving.png';
// import YAOZ from '../assets/freindZone/YAOZ.png';
// import zenith from '../assets/freindZone/zenith.png';

// import accord from '../assets/trustZone/accord.png';
// import anais from '../assets/trustZone/anais.png';
// import carLoxury from '../assets/trustZone/carLoxury.png';
// import centreKindi from '../assets/trustZone/centreKindi.png';
// import dimaSouss from '../assets/trustZone/dimaSouss.png';
// import exelPoramtion from '../assets/trustZone/exelPoramtion.png';
// import ff from '../assets/trustZone/ff.png';
// import fidary from '../assets/trustZone/fidary.png';
// import GTGB from '../assets/trustZone/GTGB.png';
// import justCargoTrust from '../assets/trustZone/justCargo.png';
// import kitchena from '../assets/trustZone/kitchena.png';
// import mussaSoft from '../assets/trustZone/mussaSoft.png';
// import nextProfil from '../assets/trustZone/nextProfil.png';
// import norsery from '../assets/trustZone/norsery.png';
// import petuveUP from '../assets/trustZone/petuveUP.png';
// import rclim from '../assets/trustZone/rclim.png';
// import technopark from '../assets/trustZone/technopark.png';
// import trust from '../assets/trustZone/trust.png';
// import yoursMedia from '../assets/trustZone/YoursMedia.png';
// import P from '../assets/P.png'

// const partnerImages = [
//   { src: b2bAfterWork, alt: 'B2B After Work' },
//   { src: BFC, alt: 'BFC' },
//   { src: chtoukaConnect, alt: 'Chtouka Connect' },
//   { src: ecta, alt: 'ECTA' },
//   { src: fanZone, alt: 'Fan Zone' },
//   { src: glissa, alt: 'Glissa' },
//   { src: morocco, alt: 'Morocco' },
//   { src: siac, alt: 'SIAC' },
//   { src: tawsna, alt: 'Tawsna' },
//   { src: azura, alt: 'Azura' },
//   { src: bozarHome, alt: 'Bozar Home' },
//   { src: devlopmentPartner, alt: 'Development Partner' },
//   { src: exclusuve, alt: 'Exclusive' },
//   { src: hanny, alt: 'Hanny' },
//   { src: innovationCity, alt: 'Innovation City' },
//   { src: justCargoFriend, alt: 'Just Cargo' },
//   { src: optiMall, alt: 'Opti Mall' },
//   { src: primePlan, alt: 'Prime Plan' },
//   { src: stayLiving, alt: 'Stay Living' },
//   { src: YAOZ, alt: 'YAOZ' },
//   { src: zenith, alt: 'Zenith' },
//   { src: accord, alt: 'Accord' },
//   { src: anais, alt: 'Anais' },
//   { src: carLoxury, alt: 'Car Luxury' },
//   { src: centreKindi, alt: 'Centre Kindi' },
//   { src: dimaSouss, alt: 'Dima Souss' },
//   { src: exelPoramtion, alt: 'Exel Promotion' },
//   { src: ff, alt: 'FF' },
//   { src: fidary, alt: 'Fidary' },
//   { src: GTGB, alt: 'GTGB' },
//   { src: justCargoTrust, alt: 'Just Cargo Trust' },
//   { src: kitchena, alt: 'Kitchena' },
//   { src: mussaSoft, alt: 'Mussa Soft' },
//   { src: nextProfil, alt: 'Next Profil' },
//   { src: norsery, alt: 'Nursery' },
//   { src: petuveUP, alt: 'Petuve UP' },
//   { src: rclim, alt: 'Rclim' },
//   { src: technopark, alt: 'Technopark' },
//   { src: trust, alt: 'Trust' },
//   { src: yoursMedia, alt: 'Yours Media' },
// ];

// export default function Partners() {
//   const duplicatedPartners = [...partnerImages, ...partnerImages];

//   return (
//   <section className="relative py-24 lg:py-32 overflow-hidden border-y border-slate-200/80 bg-gradient-to-b from-white via-slate-50/40 to-white">


//   <style>{`
//     @keyframes marquee {
//       from {
//         transform: translateX(0);
//       }
//       to {
//         transform: translateX(-50%);
//       }
//     }

//     .marquee-track {
//       display: flex;
//       width: max-content;
//       animation: marquee 100s linear infinite;
//     }

//     .marquee-container:hover .marquee-track {
//       animation-play-state: paused;
//     }
//   `}</style>

//   <div className="relative max-w-7xl mx-auto px-6 lg:px-8">

//     {/* Header */}
//     <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">

//       <div className="inline-flex items-center px-4 py-2 rounded-full border border-blue-100 bg-blue-50 text-accent text-sm font-semibold mb-6">
//         Partenaires Stratégiques
//       </div>

//       <h2 className="text-4xl md:text-5xl font-black tracking-tight text-accent">
//         Nos <span><img src={P} alt="" className="h-16 w-16 inline-flex items-center"/></span>artenaires de Confiance
        
//       </h2>

//       <p className="mt-6 text-lg text-slate-600 leading-relaxed">
//         Nous collaborons avec des organisations et des leaders reconnus afin
//         d'apporter une expertise stratégique, une influence durable et des
//         résultats mesurables.
//       </p>
//     </div>

//     {/* Logos Slider */}
//     <div className="relative overflow-hidden marquee-container">

//       {/* Fade Edges */}
//       <div className="absolute left-0 top-0 bottom-0 w-32 lg:w-48 lg:bg-gradient-to-r lg:from-white lg:via-white/90 to-transparent z-20" />
//       <div className="absolute right-0 top-0 bottom-0 w-32 lg:w-48 lg:bg-gradient-to-l lg:from-white lg:via-white/90 to-transparent z-20" />

//       <div className="marquee-track gap-8 lg:gap-10">

//         {duplicatedPartners.map((partner, index) => (
//           <div
//             key={index}
//             className="
//               group
//               flex
//               items-center
//               justify-center
//               min-w-[220px]
//               md:min-w-[280px]
//               h-28
//               px-8
//               rounded-3xl
//               border
//               border-slate-200/80
//               bg-white/80
//               backdrop-blur-xl
//               shadow-[0_4px_20px_rgba(15,23,42,0.04)]
//               hover:shadow-[0_20px_50px_rgba(15,23,42,0.12)]
//               hover:-translate-y-1
//               hover:border-blue-200
//               transition-all
//               duration-500
//             "
//           >
//             <img
//               src={partner.src}
//               alt={partner.alt}
//               draggable="false"
//               className="
//                 h-24
//                 w-24
//                 object-contain
//                 lg:opacity-60
//                 md:grayscale
//                 group-hover:opacity-100
//                 group-hover:grayscale-0
//                 transition-all
//                 duration-500
//               "
//             />
//           </div>
//         ))}

//       </div>
//     </div>

//     {/* Bottom Trust Statement */}
//     <div className="mt-16 text-center">
//       <p className="text-sm uppercase tracking-[0.3em] text-slate-400 font-semibold">
//        La confiance des leaders du secteu
//       </p>
//     </div>

//   </div>
// </section>
//   );
// }