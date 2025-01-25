books=[
    {"title":"aviel moshe",
"author":"maor shmueli",
"Publication_year":"2025",},
    {"title":"maccabi haifa",
"author":"barak bachar",
"Publication_year":"2025",}
]

while True:
    option = input(
        "1. Add a Book \n2. Update a Book\n3. Delete a Book\n4. View All Books\n5. Search for a Book\n6. Exit\n\nEnter your choice: "
    )

    if option == "1":
        new_title = input("Enter book title: ")
        new_author = input("Enter author: ")
        new_publication = input("Enter publication year: ")
        books.append(
            {"title": new_title, "author": new_author, "Publication_year": new_publication}
        )
        print(f"Book '{new_title}' by {new_author} added to the library.\n\n")

    elif option == "2":
        title_to_update = input("Enter the title of the book to update: ")
        new_author = input("Enter new author: ")
        new_publication = input("Enter new publication year: ")
        for book in books:
            if book["title"] == title_to_update:
                book["author"] = new_author
                book["Publication_year"] = new_publication
                print(f"Book '{title_to_update}' updated successfully!\n\n")
                break
        else:
            print(f"Book '{title_to_update}' not found.\n\n")

    elif option == "3":
        book_to_delete = input("Enter the title of the book to delete: ")
        books = [book for book in books if book["title"] != book_to_delete]
        print(f"Book '{book_to_delete}' removed from the library.\n\n")

    elif option == "4":
        if books:
            print("Books in the library:")
            for book in books:
                for key, value in book.items():
                    print(f"{key}: {value}")
                print("\n")
        else:
            print("No books available in the library.\n\n")

    elif option == "5":
        title_to_search = input("Enter the title of the book to search: ")
        for book in books:
            if book["title"] == title_to_search:
                print("Book found:")
                for key, value in book.items():
                    print(f"{key}: {value}")
                break
        else:
            print(f"Book '{title_to_search}' not found.\n\n")

    elif option == "6":
        print("Thank you for using the Library Management System. Goodbye!")
        break 

    else:
        print("Invalid option. Please try again.\n\n")