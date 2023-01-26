import { error } from '@sveltejs/kit';
import data from '../../../data.json';

let modems = {
    'hh3k': 'HomeHub 3000',
    'hh4k': 'HomeHub 4000',
    'gh': 'GigaHub',
}
export function load ({ params }) {

    const [mdm, ver] = params.slug.split('-');

    if (!data[mdm]) {
        throw error(404, 'Not found');
    }

    const version = data[mdm].find(v => v.version == ver);
    

    if (!version) {
        throw error(404, 'Not found');
    }

    return {
        modem: modems[mdm],
        version,
        slug: mdm
    };
}