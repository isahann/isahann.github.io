import {Injectable} from '@angular/core';
import clippy, {Agent} from "clippyts";

@Injectable({
  providedIn: 'root'
})
export class ClippyService {

  private _agent: Agent | undefined;

  constructor() {
    clippy.load({
      name: 'Clippy',
      failCb: (err) => console.log(err),
      successCb: (agent) => {
        agent.show(false);
        this._agent = agent;
      }
    });
  }

  public speak(text: string): void {
    this._agent!.speak(text, false);
  }
}
