import { exec } from 'shelljs';

const defaultMsg = 'Test commit';

function makeDefault(str) {
	if ((typeof str === 'string' && !str.trim()) || str === undefined) {
		return defaultMsg;
	}

	return str;
}

export function gitDummyCommit(msg?: string | string[], silent?: string) {
    let arg = '';
    msg = makeDefault(msg);
    if (Array.isArray(msg)) {
		if (msg.length) {
			msg.forEach(function (m) {
				m = makeDefault(m);

				arg += '-m"' + m + '" ';
			});
		} else {
			arg = '-m"' + defaultMsg + '"';
		}
	} else {
		arg = '-m"' + msg + '"';
	}

	exec('git commit ' + arg + ' --allow-empty --no-gpg-sign', {
		silent: silent
	});
}