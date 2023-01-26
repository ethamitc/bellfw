import { error } from '@sveltejs/kit';
import data from '../../../data.json';

let equipment = {
    'hh3k': 'HomeHub 3000',
    'hh4k': 'HomeHub 4000',
    'gh': 'GigaHub',
    "7802": "Android STB (7802)"
}
export function load ({ params }) {

    const [equip, ver] = params.slug.split('-');

    if (!data[equip]) {
        throw error(404, 'Not found');
    }

    const version = data[equip].find(v => v.version == ver);
    

    if (!version) {
        throw error(404, 'Not found');
    }

    return {
        modem: equipment[equip],
        version,
        slug: equip
    };
}