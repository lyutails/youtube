import { CommonModule, UpperCasePipe } from '@angular/common';
import { Component, computed, OnInit, signal } from '@angular/core';
import {
  FormArray,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatIcon } from '@angular/material/icon';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';

import { CustomCardActions } from '../../store/youtube.actions';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [ReactiveFormsModule, UpperCasePipe, CommonModule, MatIcon],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss',
})
export class AdminComponent implements OnInit {
  submitButtonName = 'Submit';
  resetButtonName = 'Reset';
  deleteButtonName = 'delete';
  addButtonName = 'add';
  index!: number;
  initialValue = '';
  requiredSign = '*';
  requiredSignColor = 'oklch(59.98% 0.236 15.45)';
  validSignColor = 'oklch(59.92% 0.255 298.77)';
  customId!: string;

  colorRequired = signal(this.requiredSignColor);
  colorValid = signal(this.validSignColor);
  isValid = signal(false);
  validSign = signal('verified_user');
  requiredSignSignal = signal('lock');

  constructor(
    private router: Router,
    public store: Store
  ) {}

  ngOnInit() {
    this.adminForm = new FormGroup({
      title: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(20),
      ]),
      description: new FormControl('', [Validators.maxLength(255)]),
      img: new FormControl('', [Validators.required]),
      linkVideo: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
      ]),
      tags: new FormArray([new FormControl('', Validators.required)]),
    });
  }

  adminForm = new FormGroup({
    title: new FormControl(''),
    description: new FormControl(''),
    img: new FormControl(''),
    linkVideo: new FormControl(''),
    tags: new FormArray([new FormControl()]),
  });

  onSubmit() {
    if (
      this.adminForm.value.title?.trim() &&
      this.adminForm.value.img?.trim() &&
      this.adminForm.value.linkVideo?.trim() &&
      this.adminForm.controls.tags.valid &&
      this.adminForm.valid
    ) {
      this.store.dispatch(
        CustomCardActions.createCard({
          item: {
            customId: this.createCustomId(),
            title: this.adminForm.value.title,
            description: this.adminForm.value.description,
            img: this.adminForm.value.img,
            linkVideo: this.adminForm.value.linkVideo,
            tags: this.adminForm.value.tags,
            date: new Date().toString(),
          },
        })
      );
      this.adminForm.reset();
      this.tags.clear();
      this.addTag();
    }
  }

  createCustomId() {
    this.customId = Math.random().toString(36).substring(2);
    return this.customId;
  }

  get title() {
    return this.adminForm.get('title');
  }

  get description() {
    return this.adminForm.get('description');
  }

  get img() {
    return this.adminForm.get('img');
  }

  get linkVideo() {
    return this.adminForm.get('linkVideo');
  }

  get tags() {
    const { tags } = this.adminForm.controls;
    return tags;
  }

  addTag() {
    if (this.tags.length <= 4) {
      const tag = new FormControl('', Validators.required);
      return this.tags.push(tag);
    }
    return this.tags;
  }

  removeTag() {
    if (this.tags.length > 1) {
      return this.tags.removeAt(this.index);
    }
    return this.tags;
  }

  reset() {
    // this.tags.reset(['']);

    /*  return this.adminForm.reset({
      title: this.initialValue,
      description: this.initialValue,
      img: this.initialValue,
      linkVideo: this.initialValue,
      tags: [],
    }); */

    /* this.adminForm.reset();
    while (this.tags.length > 1) {
      this.removeTag();
    } */

    this.adminForm.reset();
    this.tags.clear();
    this.addTag();
  }

  /*   if (this.adminForm.valid) {
      this.isValid.set(true);
    } */

  setRequiredSignColor(value: boolean) {
    this.isValid.set(value);
  }

  color = computed(() => {
    if (this.isValid()) {
      return this.colorValid();
    }
    return this.colorRequired();
  });
}
