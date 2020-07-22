import log from '../utils/logger';

exports.command = 'run';
exports.desc = 'Initiate checks';
exports.builder = {}
exports.handler = async function () {
	log.info('Use --help argument to get available subcommands');
};
