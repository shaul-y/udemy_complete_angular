import { Component, OnInit } from "@angular/core";
import { Recipe } from "../recipe.model";

@Component({
  selector: "app-recipes-list",
  templateUrl: "./recipes-list.component.html",
  styleUrls: ["./recipes-list.component.css"]
})
export class RecipesListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      "Test Recipe",
      "My Description",
      "https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/frying-pan-pizza-easy-recipe-collection.jpg"
    ),
    new Recipe(
      "Test Recipe 2",
      "My Description 2",
      "https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/frying-pan-pizza-easy-recipe-collection.jpg"
    )
  ];

  constructor() {}

  ngOnInit() {}
}
