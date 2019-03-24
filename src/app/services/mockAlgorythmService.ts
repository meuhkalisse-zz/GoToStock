import { Injectable } from '@angular/core';
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