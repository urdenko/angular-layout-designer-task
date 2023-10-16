import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Icons } from '../consts/icons.enum';

@Component({
	selector: 'app-icon',
	templateUrl: './icon.component.html',
	styleUrls: ['./icon.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconComponent {
	@Input()
	icon?: Icons;

	public Icons = Icons;
}
