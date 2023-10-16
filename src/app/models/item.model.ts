import { Statuses } from '../consts/statuses.enum';

export interface Item {
	id: symbol;
	label: string;
	description: string;
	foto: string;
	status: Statuses;
}
