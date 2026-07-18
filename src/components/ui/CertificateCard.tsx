import type { CertificatesType } from '../../data/certificates';
import PdfPreview from './PdfPreview';

interface CertificateCardProps {
  certificate: CertificatesType;
}

const CertificateCard = ({ certificate }: CertificateCardProps) => {
  return (
    <div className="w-full h-85 relative flex flex-col gap-4 bg-black/40 border border-primary/10 rounded-xl p-5 transition-all duration-300 hover:border-primary/40 hover:-translate-y-1 dark:bg-white dark:border-black/10">
      <div className="flex items-center justify-center overflow-hidden">
        {/* <span className="text-xs font-mono px-2 py-1 rounded-md bg-primary/10 text-primary">{certificate.year}</span> */}

        {/* <img src={certificate.src} alt={certificate.title} loading="lazy" className="w-full object-cover transition-transform duration-300 group-hover:scale-105" /> */}
        <PdfPreview pdf={certificate.pdf} />
      </div>

      <div className="flex items-center gap-3">

        <div className="size-10 shrink-0 flex items-center justify-center rounded-lg bg-primary/10 text-primary">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
            <path fillRule="evenodd" d="M8.603 3.799A4.49 4.49 0 0 1 12 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 0 1 3.498 1.307 4.491 4.491 0 0 1 1.307 3.497A4.49 4.49 0 0 1 21.75 12a4.49 4.49 0 0 1-1.549 3.397 4.491 4.491 0 0 1-1.307 3.497 4.491 4.491 0 0 1-3.497 1.307A4.49 4.49 0 0 1 12 21.75a4.49 4.49 0 0 1-3.397-1.549 4.49 4.49 0 0 1-3.498-1.306 4.491 4.491 0 0 1-1.307-3.498A4.49 4.49 0 0 1 2.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 0 1 1.307-3.497 4.49 4.49 0 0 1 3.497-1.307Zm7.007 6.387a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
          </svg>
        </div>
        <h5 className="text-base font-semibold text-white leading-snug dark:text-black">{certificate.title}</h5>

        {certificate.url && (
          <a href={certificate.url} target="_blank" rel="noreferrer" className="text-white/40 transition-colors hover:text-primary dark:text-black/40 absolute right-5">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
            </svg>
          </a>
        )}
      </div>
    </div>
  );
};

export default CertificateCard;