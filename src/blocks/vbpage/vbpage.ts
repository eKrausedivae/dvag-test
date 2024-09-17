import { nothing, render } from 'lit';
import { cleanUpBlock } from 'Utils/cleanUpBlock';

import './vbpage.scss';
import { DebuggerService } from '@kluntje/services';
import FetchService, { FetchServiceOptions } from '../../services/fetch.service';

export interface VBPageResponse {
  data: string;
}

export default async function decorate(block: HTMLElement) {
  const url = `https://21199447-2ef4-4b02-874e-d3f6f3fbeb14.mock.pstmn.io/get`;
  const options: FetchServiceOptions = {
    cacheOptions: {
      cacheType: 'runtime',
    },
  };

  let vbPageHTML: string | symbol = '';

  try {
    const vbPageResponse = await FetchService.fetchJsonExternal<VBPageResponse>(url, options);

    vbPageHTML = vbPageResponse.data;
  } catch (error) {
    DebuggerService.error('VBPage: Error fetching vbPage data:', error);
    vbPageHTML = nothing;
  }

  cleanUpBlock(block);
  render(vbPageHTML, block);
}
