class Question {

  constructor() {
    this.title = createElement('h1')
    this.title2=createElement('h2')
    this.input1 = createInput("Enter Your Name Here....");
    this.input2 = createInput("Enter Correct Option No..");
    this.input3 = createInput("Are You Pubg Player..");
    this.button = createButton('Submit');
    this.question = createElement('h3');
    this.option1 = createElement('h4');
    this.option2 = createElement('h4');
    this.option3 = createElement('h4');
    this.option4 = createElement('h4');
  }

  hide(){
    this.title.hide();
    this.input1.hide();
    this.button.hide();
    this.input2.hide();
    this.input3.hide();
  }

  display(){
    this.title.html("MyQuiz Game");
    this.title.position(600, 0);
   
    this.title2.html("created by-MEDHANSH");
    this.title2.position(1000,500);

    this.question.html("Question:- WHICH IS THE MOST POPULAR GUN IN PUBG MOBILE?" );
    this.question.position(150, 80);
    this.option1.html("1: AKM " );
    this.option1.position(150, 100);
    this.option2.html("2: AWM" );
    this.option2.position(150, 120);
    this.option3.html("3: SCAR" );
    this.option3.position(150, 140);
    this.option4.html("4: M1GA4" );
    this.option4.position(150, 160);

    this.input1.position(150, 230);
    this.input2.position(350, 230);
    this.input3.position(1000, 230);
    this.button.position(290, 300);

    this.button.mousePressed(()=>{
      this.title.hide();
      this.input1.hide();
      this.input2.hide();
      this.input3.hide();
      this.button.hide();
      contestant.name = this.input1.value();
      contestant.answer = this.input2.value();
      contestantCount+=1;
      contestant.index = contestantCount;
      contestant.update();
      contestant.updateCount(contestantCount);
    });
  }
}
