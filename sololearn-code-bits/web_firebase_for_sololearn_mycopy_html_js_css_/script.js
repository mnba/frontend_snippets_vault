// Created by Zeke Williams


document.addEventListener("DOMContentLoaded", function() {
    // Your web app's Firebase configuration
    var firebaseConfig = {
        apiKey: "AIzaSyAJu71ZfES63DuWdF8CJtinHRwI7lKUs_E",
        authDomain: "slfirebase-806fd.firebaseapp.com",
        databaseURL: "https://slfirebase-806fd.firebaseio.com",
        projectId: "slfirebase-806fd",
        storageBucket: "slfirebase-806fd.appspot.com",
        messagingSenderId: "450168714789",
        appId: "1:450168714789:web:1383ff6c8e6507f0f4f1cc"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    const storage = firebase.storage();
    //fetchBook();
    
    loadAllImages();

    document.querySelectorAll(".accordion").forEach((accordionElement) => {
        accordionElement.addEventListener("click", (evt) => {
            evt.target.classList.toggle("active");
            const panel = evt.target.nextElementSibling;

            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
            }
            else {
                panel.style.maxHeight = panel.scrollHeight + "px";
            }
        });
    });

    /**
     * Loads all images at the root storage directory and fills the img tags in html by
     * using the name of the image as the id of the img tag.
     */
    function loadAllImages() {
        storage.ref().listAll()
            .then((imageRefList) => {
                imageRefList.items.forEach((imageRef) => {
                    const nameWithoutExtension = imageRef.name.split(".")[0];

                    imageRef.getDownloadURL()
                        .then((url) => {
                            document.querySelector("#" + nameWithoutExtension).src = url;
                        });
                })
            });
    }


    function fetchBook() {
        const db = firebase.firestore();
        const booksCollection = db.collection("books");

        booksCollection.where("title", "==", "Dune").get()
            .then((querySnapshot) => {
                querySnapshot.forEach((docRef) => {
                    console.log(docRef.data().author);
                })
            })
            .catch((err) => console.error(err));
    }
});