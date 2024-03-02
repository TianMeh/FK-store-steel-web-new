import { META_DATA } from '@/constants/Constants';
import Head from 'next/head';
import React from 'react';

function MetaHead({
  component,
  title,
  description = '',
}: {
  component?: any;
  title?: string;
  description?: string;
}) {
  title = title ? title : component.meta?.title || META_DATA.DEFAULT.title;

  return (
    <Head>
      <title>{title}</title>
    </Head>
  );
}

export default MetaHead;
