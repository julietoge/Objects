//Number ONE(1)
function InstagramPost(handleOfauthor, content, authorImageLink, numberOfviews, numberOflikes){
    this.handleOfauthor = handleOfauthor;
    this.content = content;
    this.authorImageLink = authorImageLink;
    this.numberOfviews = numberOfviews;
    this.numberOflikes = numberOflikes;
}
//Number TWO(2)
let firstAuthorPost = new InstagramPost("Stephanie Wilson", "Summer Break", "https://www.instagram.com/Stephanie-Wilson/img/Summer-Break", "5,802views", "9.5k");
console.log(firstAuthorPost);

let secondAuthorPost = new InstagramPost("Anyanwu Chioma", "2023 Election", "https://www.instagram.com/Anyanwu-Chioma/img/2023-Election", "2,353views", "1.8k");
console.log(secondAuthorPost);
//==============================================================================================================================


//Number THREE A(3a)
function CreatePerson(name, age, location,){
    return{
        name: name,
        age: age,
        location: location,
    }
}
let musa = CreatePerson("Musa Dawadu", "19years", "Lekki, Lagos State");
console.log(musa);
//Number THREE B(3b)
function CreateJambScore(eng, govt, lit, crk){
    return{
        ENG: eng,
        GOVT: govt,
        LIT: lit,
        CRK: crk,
    }
}
musa.JambScore = CreateJambScore(70, 85, 82, 94);
console.log(musa);
//==============================================================================================================================


//Number FIVE(5)
const presidentialCandidates = {
    AAC: "Omoyele Sowore",
    ACCORD: "Christopher Imumolen",
    APC: "Bola Ahmed Tinubu",
    LP: "Peter Obi",
    NNPP: "Rabiu Kwankwaso",
    PDP: "Atiku Abuakar",
}
//answer with for.. in loop
for(let i in presidentialCandidates){
    console.log(presidentialCandidates[i] + " is the presidential Candidate of " + i)
}
//==============================================================================================================================