import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";

import {AppRoutingModule} from "./app-routing.module";
import {AppComponent} from "./app.component";
import {HeaderComponent} from "./components/header/header.component";
import {BuildingCostsComponent} from "./components/building-costs/building-costs.component";
import {ScoreCardComponent} from "./components/score-card/score-card.component";
import {IslandMapComponent} from "./components/island-map/island-map.component";
import {DiceBoxComponent} from "./components/dice-box/dice-box.component";
import {OpeningFormComponent} from "./components/opening-form/opening-form.component";
import {VictoryScreenComponent} from "./components/victory-screen/victory-screen.component";
import {OtherScoresComponent} from "./components/other-scores/other-scores.component";
import {PlayerComponent} from "./components/player/player.component";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BuildingCostsComponent,
    ScoreCardComponent,
    IslandMapComponent,
    DiceBoxComponent,
    OpeningFormComponent,
    VictoryScreenComponent,
    OtherScoresComponent,
    PlayerComponent
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
