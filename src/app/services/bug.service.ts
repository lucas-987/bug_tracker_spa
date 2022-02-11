import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Bug } from '../model/Bug';
import { Observable, of } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class BugService {

  private apiUrl = "http://localhost:8080/api/bug" // To move in a config file

  bugs: Bug[] = []

  constructor(private http: HttpClient) { }

  fetch(): void {
    this.http.get<Bug[]>(this.apiUrl)
      //.subscribe((bugs) => this.bugs = bugs);
      .subscribe((bugs) => {
        this.bugs.length = 0;
        this.bugs.push(...bugs);
      });
    console.log("fetch");
  }

  getAll(): Observable<Bug[]> {
    if (this.bugs.length == 0) this.fetch()
    console.log("getAll")
    return of(this.bugs)
  }

  getById(id: number): Bug | undefined {
    return this.bugs.find(bug => bug.id === id);
  }

  delete(bug: Bug): Observable<Bug> {
    const url = `${this.apiUrl}/${bug.id}`
    const res = this.http.delete<Bug>(url)

    res.subscribe(() => {
      this.bugs.length = 0
      let filteredBugs = this.bugs.filter((b) => b.id != bug.id)
      this.bugs.push(...filteredBugs)
    })

    return res
  }

  update(bug: Bug): Observable<Bug> {
    const url = `${this.apiUrl}/${bug.id}`
    return this.http.put<Bug>(url, bug, httpOptions)
  }

  create(bug: Bug): Observable<Bug> {
    const res = this.http.post<Bug>(this.apiUrl, bug, httpOptions)

    res.subscribe((createdBug) => {
      this.bugs.push(createdBug)
    })

    return res
  }
}
