import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { LoremIpsum } from 'lorem-ipsum';
import { Item } from '../models/item.model';
import { Statuses } from '../consts/statuses.enum';
import { Icons } from '../consts/icons.enum';

@Component({
	selector: 'app-root',
	templateUrl: './main-page.component.html',
	styleUrls: ['./main-page.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainPageComponent {
	public items: Item[] = [];

	public selected = new Set<symbol>();

	public Icons = Icons;

	private lorem = new LoremIpsum({
		sentencesPerParagraph: {
			max: 8,
			min: 1,
		},
		wordsPerSentence: {
			max: 16,
			min: 1,
		},
	});

	public addItem() {
		const item: Item = {
			id: Symbol(),
			label: this.lorem.generateWords(this.randomWordsQty),
			description: this.lorem.generateSentences(this.randomSentencesQty),
			status: this.randomStatus,
			foto: this.randomFoto,
		};

		this.items.unshift(item);
	}

	public checkItem(isChecked: boolean, id: symbol) {
		if (isChecked) {
			this.selected.add(id);
		} else {
			this.selected.delete(id);
		}
	}

	public deleteSelected() {
		Array.from(this.selected).forEach((itemId) => {
			this.deleteById(itemId);
		});
	}

	public deleteById(id: symbol) {
		const doomedIndex = this.items.findIndex((item) => item.id === id);

		this.items.splice(doomedIndex, 1);
		this.selected.delete(id);
	}

	public print() {
		globalThis.print();
	}

	private get randomSentencesQty() {
		return Math.floor(Math.random() * 20);
	}

	private get randomWordsQty() {
		return Math.floor(Math.random() * 8);
	}

	private get randomStatus() {
		return Math.round(Math.random()) === 1
			? Statuses.active
			: Statuses.inactive;
	}

	private get randomFoto() {
		return Math.round(Math.random()) === 1
			? '/assets/items/foto1.jpg'
			: '/assets/items/foto2.png';
	}
}
