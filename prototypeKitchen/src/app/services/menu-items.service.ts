import { Injectable } from '@angular/core';
import { Ingredients, MenuItem, Promotion } from '../models/menuItem';

@Injectable({
  providedIn: 'root'
})
export class MenuItemsService {

  private allMenuItems: MenuItem[] = [
    {
      id: 0,
      name:"Ikura Gunkan",
      englishName: "Salmon Roe",
      image: "assets/images/Menu_Ikura_Gunkan.png",
      price: 8.99,
      quantity: 6,
      calories: 1000,
      status: "Purchasable",
      prepTime: "10 mins",
      recipeDescription: "A descriptive recipe description of greatness.",
      ingredients: Ingredients[2] = [{id: 1, name: "Salt", quantity: 600, units: "g"},
      {id: 2, name: "Salmon Eggs", quantity: 600, units: "g"}], 
      popularityRanking: 9,
      mostOftenPairedWith: "Sake Nigiri",
      dailyOrders: 5,
      weeklyOrders: 25,
      dailyGross: 44.95,
      weeklyGross: 224.75,
      promotions: Promotion[1] = [{id: 1, enabled: true, description: "Buy 2 get 1 free!",
      requirements: "Buy 2", dealType: "Percentile Discount", discountAmount: 100,
       itemsApplicable: 1, applicableItemName: "Sake Nigiri", limitations: "Unlimited"}]
    },
    {
      id: 1,
      name:"Sake Nigiri",
      englishName: "Salmon",
      image: "assets/images/Menu_Sake_Nigiri.png",
      price: 6.99,
      quantity: 6,
      calories: 1000,
      status: "Purchasable",
      prepTime: "10 mins",
      recipeDescription: "A descriptive recipe description of greatness.",
      ingredients: Ingredients[2] = [{id: 1, name: "Salt", quantity: 600, units: "g"},
      {id: 3, name: "Other", quantity: 600, units: "g"}], 
      popularityRanking: 8,
      mostOftenPairedWith: "Sake Nigiri",
      dailyOrders: 5,
      weeklyOrders: 25,
      dailyGross: 34.95,
      weeklyGross: 174.75,
      promotions: Promotion[1] = [{id: 1, enabled: false, description: "Buy 2 get 1 free!",
      requirements: "Buy 2", dealType: "Percentile Discount", discountAmount: 100,
       itemsApplicable: 1, applicableItemName: "Sake Nigiri", limitations: "Unlimited"},
       {id: 1, enabled: true, description: "Buy 10 get 1 free!",
       requirements: "Buy 10", dealType: "Percentile Discount", discountAmount: 100,
        itemsApplicable: 1, applicableItemName: "Sake Nigiri", limitations: "Unlimited"}]
    },
    {
      id: 2,
      name:"Kappa Maki",
      englishName: "Cucumber",
      image: "assets/images/Menu_Kappa_Maki.png",
      price: 6.99,
      quantity: 6,
      calories: 1000,
      status: "Purchasable",
      prepTime: "10 mins",
      recipeDescription: "A descriptive recipe description of greatness.",
      ingredients: Ingredients[2] = [{id: 1, name: "Salt", quantity: 600, units: "g"},
      {id: 3, name: "Other", quantity: 600, units: "g"}], 
      popularityRanking: 7,
      mostOftenPairedWith: "Sake Nigiri",
      dailyOrders: 5,
      weeklyOrders: 25,
      dailyGross: 34.95,
      weeklyGross: 174.75,
      promotions: Promotion[1] = [{id: 1, enabled: true, description: "Buy 2 get 1 free!",
      requirements: "Buy 2", dealType: "Percentile Discount", discountAmount: 100,
       itemsApplicable: 1, applicableItemName: "Sake Nigiri", limitations: "Unlimited"}]
    },
    {
      id: 3,
      name:"Maguro Nigiri",
      englishName: "Lean cut of Tuna",
      image: "assets/images/Menu_Maguro_Nigiri.png",
      price: 5.99,
      quantity: 6,
      calories: 1000,
      status: "Purchasable",
      prepTime: "10 mins",
      recipeDescription: "A descriptive recipe description of greatness.",
      ingredients: Ingredients[2] = [{id: 1, name: "Salt", quantity: 600, units: "g"},
      {id: 3, name: "Other", quantity: 600, units: "g"}],  
      popularityRanking: 6,
      mostOftenPairedWith: "Sake Nigiri",
      dailyOrders: 5,
      weeklyOrders: 25,
      dailyGross: 29.95,
      weeklyGross: 149.75,
      promotions: Promotion[1] = [{id: 1, enabled: true, description: "Buy 2 get 1 free!",
      requirements: "Buy 2", dealType: "Percentile Discount", discountAmount: 100,
       itemsApplicable: 1, applicableItemName: "Sake Nigiri", limitations: "Unlimited"}]
    },
    {
      id: 4,
      name:"Uni",
      englishName: "Sea Urchin",
      image: "assets/images/Menu_Uni.png",
      price: 5.99,
      quantity: 6,
      calories: 1000,
      status: "Purchasable",
      prepTime: "10 mins",
      recipeDescription: "A descriptive recipe description of greatness.",
      ingredients: Ingredients[2] = [{id: 1, name: "Salt", quantity: 600, units: "g"},
      {id: 3, name: "Other", quantity: 600, units: "g"}], 
      popularityRanking: 5,
      mostOftenPairedWith: "Sake Nigiri",
      dailyOrders: 5,
      weeklyOrders: 25,
      dailyGross: 29.95,
      weeklyGross: 149.75,
      promotions: Promotion[1] = [{id: 1, enabled: true, description: "Buy 2 get 1 free!",
      requirements: "Buy 2", dealType: "Percentile Discount", discountAmount: 100,
       itemsApplicable: 1, applicableItemName: "Sake Nigiri", limitations: "Unlimited"}]
    },
    {
      id: 5,
      name:"Toro",
      englishName: "Tuna belly",
      image: "assets/images/Menu_Toro.png",
      price: 5.99,
      quantity: 6,
      calories: 1000,
      status: "Purchasable",
      prepTime: "10 mins",
      recipeDescription: "A descriptive recipe description of greatness.",
      ingredients: Ingredients[2] = [{id: 1, name: "Salt", quantity: 600, units: "g"},
      {id: 3, name: "Other", quantity: 600, units: "g"}], 
      popularityRanking: 4,
      mostOftenPairedWith: "Sake Nigiri",
      dailyOrders: 5,
      weeklyOrders: 25,
      dailyGross: 29.95,
      weeklyGross: 149.75,
      promotions: Promotion[1] = [{id: 1, enabled: true, description: "Buy 2 get 1 free!",
      requirements: "Buy 2", dealType: "Percentile Discount", discountAmount: 100,
       itemsApplicable: 1, applicableItemName: "Sake Nigiri", limitations: "Unlimited"}]
    },
    {
      id: 6,
      name:"Hamachi",
      englishName: "Young Yellowtail",
      image: "assets/images/Menu_Hamachi.png",
      price: 5.99,
      quantity: 8,
      calories: 1000,
      status: "Purchasable",
      prepTime: "10 mins",
      recipeDescription: "A descriptive recipe description of greatness.",
      ingredients: Ingredients[2] = [{id: 1, name: "Salt", quantity: 600, units: "g"},
      {id: 3, name: "Other", quantity: 600, units: "g"}], 
      popularityRanking: 3,
      mostOftenPairedWith: "Sake Nigiri",
      dailyOrders: 5,
      weeklyOrders: 25,
      dailyGross: 29.95,
      weeklyGross: 149.75,
      promotions: Promotion[1] = [{id: 1, enabled: true, description: "Buy 2 get 1 free!",
      requirements: "Buy 2", dealType: "Percentile Discount", discountAmount: 100,
       itemsApplicable: 1, applicableItemName: "Sake Nigiri", limitations: "Unlimited"}]
    },
    {
      id: 7,
      name:"Ebi Nigiri",
      englishName: "Cooked Shrimp",
      image: "assets/images/Menu_Ebi_Nigiri.png",
      price: 5.99,
      quantity: 6,
      calories: 1000,
      status: "Purchasable",
      prepTime: "10 mins",
      recipeDescription: "A descriptive recipe description of greatness.",
      ingredients: Ingredients[2] = [{id: 1, name: "Salt", quantity: 600, units: "g"},
      {id: 3, name: "Other", quantity: 600, units: "g"}], 
      popularityRanking: 2,
      mostOftenPairedWith: "Sake Nigiri",
      dailyOrders: 5,
      weeklyOrders: 25,
      dailyGross: 29.95,
      weeklyGross: 149.75,
      promotions: Promotion[1] = [{id: 1, enabled: true, description: "Buy 2 get 1 free!",
      requirements: "Buy 2", dealType: "Percentile Discount", discountAmount: 100,
       itemsApplicable: 1, applicableItemName: "Sake Nigiri", limitations: "Unlimited"}]
    },
    {
      id: 8,
      name:"Tamagoyaki",
      englishName: "Fried Egg",
      image: "assets/images/Menu_Tamagoyaki.png",
      price: 5.99,
      quantity: 6,
      calories: 1000,
      status: "Purchasable",
      prepTime: "10 mins",
      recipeDescription: "A descriptive recipe description of greatness.",
      ingredients: Ingredients[2] = [{id: 1, name: "Salt", quantity: 600, units: "g"},
      {id: 3, name: "Other", quantity: 600, units: "g"}], 
      popularityRanking: 1,
      mostOftenPairedWith: "Sake Nigiri",
      dailyOrders: 5,
      weeklyOrders: 25,
      dailyGross: 29.95,
      weeklyGross: 149.75,
      promotions: Promotion[1] = [{id: 1, enabled: true, description: "Buy 2 get 1 free!",
      requirements: "Buy 2", dealType: "Percentile Discount", discountAmount: 100,
       itemsApplicable: 1, applicableItemName: "Sake Nigiri", limitations: "Unlimited"}]
    }
  ]

  constructor() { }

  getAllItems(): MenuItem[]{
    return this.allMenuItems;
  }
}
