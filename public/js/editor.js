const artigoTitleField = document.querySelector('.title');
const articleFeild = document.querySelector('.article');
const autorField = document.querySelector('.autor');

// BANNER
const bannerImage = document.querySelector('#banner-upload');
const banner = document.querySelector(".banner");
let bannerPath = "";  // Inicializa como string vazia

const publishBtn = document.querySelector('.publish-btn');
const uploadInput = document.querySelector('#image-upload');

bannerImage.addEventListener('change', () => {
    uploadImage(bannerImage, "banner");
});

uploadInput.addEventListener('change', () => {
    uploadImage(uploadInput, "image");
});

// UPLOAD DO BANNER
const uploadImage = (uploadFile, uploadType) => {
    const [file] = uploadFile.files;
    if (file && file.type.includes("image")) {
        // Cria uma pasta no Firebase Storage
        const storageRef = storage.ref(`uploads/${file.name}`);
        document.getElementById("error-info-user").innerHTML = " ";

        // Faz o upload do arquivo para o Firebase Storage
        storageRef.put(file).then(snapshot => {
            return snapshot.ref.getDownloadURL();  // Obtem a URL de download da imagem
        }).then(downloadURL => {
            if (uploadType === "image") {
                addImage(downloadURL, file.name);
            } else {
                bannerPath = downloadURL;
                banner.style.backgroundImage = `url("${bannerPath}")`;
            }
        }).catch(error => {
            document.getElementById("error-info-user").innerHTML = "Error uploading image";
        });
    } else {
        document.getElementById("error-info-user").innerHTML = "Please upload images only ❤️";
    }
};

const addImage = (imagepath, alt) => {
    let curPos = articleFeild.selectionStart;
    let textToInsert = `\r![${alt}](${imagepath})\r`;
    articleFeild.value = articleFeild.value.slice(0, curPos) + textToInsert + articleFeild.value.slice(curPos);
};

let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

publishBtn.addEventListener('click', () => {
    if (articleFeild.value.length && artigoTitleField.value.length && autorField.value.length) {
        let artigoTitle = artigoTitleField.value.replace(/[^a-zA-Z0-9]+/g, "-").toLowerCase();
        let letters = 'abcdefghijklmnopqrstuvwxyz';
        let id = '';
        for (let i = 0; i < 4; i++) {
            id += letters[Math.floor(Math.random() * letters.length)];
        }

        let docName = `${artigoTitle}-${id}`;
        let date = new Date();

        // Verifica se o bannerPath foi definido
        if (!bannerPath) {
            document.getElementById("error-info-user").innerHTML = "Please upload an image for the banner!";
            return;
        }

        db.collection("artigos").doc(docName).set({
            title: artigoTitleField.value,
            article: articleFeild.value,
            autor: autorField.value,
            bannerImage: bannerPath,
            publishedAt: `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`
        }).then(() => {
            location.href = `/${docName}`;
        }).catch((err) => {
            console.error("Error publish: ", err);
        });
    } else {
        document.getElementById("error-info-user").innerHTML = "Please fill in all fields before publishing!";
    }
});
