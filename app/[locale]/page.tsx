'use client';

import {useTranslations} from 'next-intl';
import PageLayout from '../../components/PageLayout';

import Hero from '@/components/Hero/Hero';
import About from '@/components/About/About';
export default function IndexPage() {
  const t = useTranslations('IndexPage');

  return (
<>
   
     {/* <p className="max-w-[590px]">
        {t.rich('description', {
          accent: (chunks) => (
            <span className="font-mono text-white">{chunks}</span>
          )
        })}
      </p>  */}
      < Hero />
      < About />
      </>
 
  );
}
