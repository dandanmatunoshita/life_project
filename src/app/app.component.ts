// src/app/app.component.ts
import { Component, OnInit, signal } from '@angular/core';
import { Router } from '@angular/router';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { environment } from 'src/environments/environment.development';

const GoogleGenAI = new GoogleGenerativeAI(environment.API_KEY);
const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 8192,
  responseMimeType: "application/json",
}

const model = GoogleGenAI.getGenerativeModel({
  model: 'gemini-1.5-flash',
  ...generationConfig
})

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent  implements OnInit
{
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  constructor(private router: Router) {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }


 
}
