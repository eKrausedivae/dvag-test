import './vbpage.scss';
import { DebuggerService } from '@kluntje/services';
import FetchService from '../../services/fetch.service';

export interface VBPageResponse {
  args: {
    data: string;
  };
}

export default async function decorate(block: HTMLElement) {
  // const url = `https://21199447-2ef4-4b02-874e-d3f6f3fbeb14.mock.pstmn.io/get`;
  const url = `https://427829a5-f09b-44ae-a207-2e45c77525e2.mock.pstmn.io/get`;
  let vbPageHTML: string = '';

  try {
    // const vbPageResponse = await FetchService.fetchJsonExternal<VBPageResponse>(url);
    const vbPageResponse = await FetchService.fetchTextExternal(url);
    // vbPageHTML = vbPageResponse.args.data;
    vbPageHTML = vbPageResponse;
  } catch (error) {
    DebuggerService.error('VBPage: Error fetching vbPage data:', error);
    vbPageHTML = '';
  }

  block.innerHTML = vbPageHTML;
}
