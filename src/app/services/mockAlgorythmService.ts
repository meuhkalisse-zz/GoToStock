import { Injectable, Inject } from '@angular/core';
import { SocialMedia } from '../model/enums/socialMedia';
import { IAlgorythmService } from './interface/algorythmService';
import { Algorythm } from '../model/enums/algorythmEnum';

@Injectable({
    providedIn: 'root',
})

export class MockAlgorythmService implements IAlgorythmService{
    constructor() {
    }

    getAllAlgorythm() : Array<string> {
        return Object.keys(Algorythm);
    }
}