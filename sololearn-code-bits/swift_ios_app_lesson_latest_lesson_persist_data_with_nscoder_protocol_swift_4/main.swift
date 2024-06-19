/*
Making data persistence work in Swift 4 with Codable.
for "Persist Data" lesson of the Swift course.
This code is not executable in SoloLearn (iOS SDK and local storage is needed),
 but must be applied in Xcode in a way described.
*/

// First, make the Item class conform to the Codable protocol by writing ": Codable" behind the class declaration in Item.swift:

class Item: Codable {
    // ...
}


// Second, add all of this in ItemTableViewController.swift:

   static let archiveURL = FileManager.default.urls(for: .documentDirectory, in: .userDomainMask).first!.appendingPathComponent("items")

   func saveItems() {
       do {
           let data = try JSONEncoder().encode(items)
           try data.write(to: ItemTableViewController.archiveURL)
       } catch {
           print(error.localizedDescription)
       }
   }

   func loadItems() -> [Item]? {
       do {
           let data = try Data(contentsOf: ItemTableViewController.archiveURL)
           return try JSONDecoder().decode([Item].self, from: data)
       } catch {
           print(error.localizedDescription)
       }
       return nil
   }

/*
Now you can call saveItems() and loadItems() in the places the lesson told you.
If you have questions, feel free to ask.
*/