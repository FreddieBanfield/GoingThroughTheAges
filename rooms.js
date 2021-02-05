rooms = {
  "menu": {
      "name": "Menu",
      "description": "Main Menu<br />Type [Start]",
      "objects": [{
              "obj_name": "Start",
              "obj_description": " ",
              "obj_actions": ["START"],
              "obj_destination": "birth"
          }
      ],
      "age": "0"
  },
    "birth": {
        "name": "Birth",
        "description": "A few rays of sunlight light the exit, a strange man is staring at you as you get pulled from your humble abode, the light becomes very bright and you hear a women scream, its a...<br />[Girl] or [Boy] ",
        "objects": [{
                "obj_name": "Girl",
                "obj_description": "GIRL!!!.",
                "obj_actions": ["GIRL"],
                "obj_destination": "age1"
            },
              {
                "obj_name": "Boy",
                "obj_description": "BOY!!!.",
                "obj_actions": ["BOY"],
                "obj_destination": "age1"
            }
      ],
      "age": "0"

  },
    "age1": {
        "name": "Age 1",
        "description": "Age 1 <br />A year passes, you are still a useless little human, please choose your choice<br />[Cute] or [Boring]",
        "objects": [{
            "obj_name": "Cute",
            "obj_description": "It's your first birthday, your family has gathered around. They all pull out their cameras and start laughing. Why you might ask. Well your the one who stuck your face in the cake. What a mess this is! <br /><br />Happiness +5<br />love +5",
            "obj_actions": ["CUTE"],
            "obj_destination": "age2"
        },
        {
            "obj_name": "Boring",
            "obj_description": "It's your first birthday, to which nothing has happend so far. You slept, pooped, and cried you parents to insantiy. But what did we expect, your only 1. <br /><br />Happiness +2<br />love +2",
            "obj_actions": ["BORING"],
            "obj_destination": "age2"
        }],
        "age": "1"
  },
    "age2": {
        "name": "Age 2",
        "description": "Age 2 <br />WOW, Look how you have grown up so fast! Your two years old which means great things will happen. Will you walk, or will you talk?<br />[Walk] or [Talk]",
        "objects": [{
            "obj_name": "Walk",
            "obj_description": "After two years of your parents waiting for you to do something, you decided to get up and strut you stuff. Literally, you got up during diper change! <br /><br />Strength +5",
            "obj_actions": ["WALK"],
            "obj_destination": "age3_B"
        },
        {
            "obj_name": "Talk",
            "obj_description": "After two years of your parents waiting for you to do something, you decided to say something. <br /> p.. p.. paPa! <br />Your dad jumps in the air out of excitement. You may think its because you said something, but its actually because your Mum bet your Dad $50 on wether youd day Mumma or Papa first. Who said money doesn't bring happiness. <br /><br />Strength +2",
            "obj_actions": ["TALK"],
            "obj_destination": "age3_A"
        }],
        "age": "2"
    },
      "age3_A": {
          "name": "Age 3",
          "description": "Age 3 <br />So you have become quite the talker, what else are you going todo to impress the parents?<br />[Walk] or [Potty Trained]",
          "objects": [{
              "obj_name": "Walk",
              "obj_description": "Ah, good. Your a walking, talking little meat sack. If only you could take the throne and do your business in the right place. Congrats on walking! <br /><br />Strength +5",
              "obj_actions": ["WALK"],
              "obj_destination": "age4_A"
          },
          {
              "obj_name": "Potty Trained",
              "obj_description": "Well this is quite bizarre, You have some how managed to relieve your self in right place, but you can't quite walk yet. Congrats on using the crapper the right way! <br /><br />Happiness +2",
              "obj_actions": ["POTTY TRAINED"],
              "obj_destination": "age4_B"
          }],
          "age": "3"
      },
        "age3_B": {
            "name": "Age 3",
            "description": "Age 3 <br />You can now traverse the world, well the living room. What impressive task are you going to achieve next?<br />[Talk] or [Potty Trained]",
            "objects": [{
                "obj_name": "Talk",
                "obj_description": "Ah, you had previously managed to walk the walk. Now I see you can also talk the talk.  <br /><br />Strength +2",
                "obj_actions": ["TALK"],
                "obj_destination": "age4_A"
            },
            {
                "obj_name": "Potty Trained",
                "obj_description": "You can walk, and you can now unload yourself in the right place, but you still haven't said a peep. Quite interesting.  <br /><br />Happiness +2",
                "obj_actions": ["POTTY TRAINED"],
                "obj_destination": "age4_C"
            }],
            "age": "3"
        },
          "age4_A": {
              "name": "Age 4",
              "description": "Age 4 <br />You Mum and Dad arn't going to wipe your bum for life, about time you learnt the potty!<br />[Potty Trained]",
              "objects": [{
                  "obj_name": "Potty Trained",
                  "obj_description": "Well done, you are a fully functioning 4 year old!<br /><br />Happiness +2",
                  "obj_actions": ["POTTY TRAINED"],
                  "obj_destination": "age5"
              }],
              "age": "4"
          },
            "age4_B": {
                "name": "Age 4",
                "description": "Age 4 <br />Good job kid, you can tell people to take you to the bathroom, but your still unable to take yourself. All that's left to learn is walking.<br />[Walk]",
                "objects": [{
                    "obj_name": "Walk",
                    "obj_description": "Well done, you are a fully functioning 4 year old! <br /><br />Strength +5",
                    "obj_actions": ["WALK"],
                    "obj_destination": "age5"
                }],
                "age": "4"
            },
              "age4_C": {
                  "name": "Age 4",
                  "description": "Age 4 <br />Well it seems like you can walk and dump in the right place, its about time you said something. You are 4 after all!<br />[Talk]",
                  "objects": [{
                      "obj_name": "Talk",
                      "obj_description": "Well done, you are a fully functioning 4 year old!<br /><br />Strength +2",
                      "obj_actions": ["TALK"],
                      "obj_destination": "age5"
                  }],
                  "age": "4"
              },
                "age5": {
                    "name": "Age 5",
                    "description": "Age 5 <br />This is a big year. It is your first year in school. Your parents are nervous though, will you make friends?<br />[Make Friends] or [Stay Alone]",
                    "objects": [{
                        "obj_name": "Make Friends",
                        "obj_description": "As the year continues you make a bunch of new friends. <br /><br />Happiness + 5<br />Purpose + 3 ",
                        "obj_actions": ["MAKE FRIENDS"],
                        "obj_destination": "age6_A"
                    },
                    {
                        "obj_name": "Stay Alone",
                        "obj_description": "Ah well, life sucks kid. Not everyone was made to be compatible with society.<br /><br />Strength +5",
                        "obj_actions": ["STAY ALONE"],
                        "obj_destination": "age6_B"
                    }],
                    "age": "5"
                },
                  "age6_A": {
                      "name": "Age 6",
                      "description": "Your first year at school went amazingly, your one of the popular kids. People want to be you. Will you let this power get to your head, or will you use it for the better?<br />[Bully] or [Excel at School]",
                      "objects": [{
                          "obj_name": "Bully",
                          "obj_description": "AHHH POWER. Yeah F*** you timmy! You decide to push him to the lockers and take his food money. Isn't it great being an ass! But lets be real, bullying doesn't bring happiness so imma have to take some points away :)<br /><br />Strength + 4<br />Purpose + 1<br />Happines - 5 ",
                          "obj_actions": ["BULLY"],
                          "obj_destination": "age7_A"
                      },
                      {
                          "obj_name": "Excel at school",
                          "obj_description": "Good choice kid, stick your head in books and study and don't let others opinions sway your judgement!<br /><br />Strength +3<br />Happiness + 3<br />purpose + 3",
                          "obj_actions": ["EXCEL AT SCHOOL"],
                          "obj_destination": "age7_B"
                      }],
                      "age": "6"
                  },
                    "age6_B": {
                        "name": "Age 6",
                        "description": "Your first year at school didn't go well. You are actually a bit of a user. Well at least you find comfort pwning some noobs on the calls of duties.<br />[Play Video Games]",
                        "objects": [{
                            "obj_name": "Play Video Games",
                            "obj_description": "Good choice kid, just try and not become a negative little squeaker that attacks everyones mums. Ok! <br /><br />Happiness + 2<br />Purpose + 2 ",
                            "obj_actions": ["PLAY VIDEO GAMES"],
                            "obj_destination": "age7_C"
                        }],
                        "age": "6"
                    },
                      "age7_A": {
                          "name": "Age 7",
                          "description": "Timmy hates you, actually you have managed to piss the majority of kids off at the school. They all call you a bully. Will you continue as a bully, or will you stop?<br />[Continue] or [Stop]",
                          "objects": [{
                              "obj_name": "Continue",
                              "obj_description": "Who cares what people call you, your the king of power, all the nerds are at your beckoning. Its just too bad none of your freinds like you anymore.<br /><br />Strength + 6<br />Purpose + 1<br />Happines - 8 ",
                              "obj_actions": ["CONTINUE"],
                              "obj_destination": "age8_A"
                          },
                          {
                              "obj_name": "Stop",
                              "obj_description": "About time you learnt that bullying is bad. Self reflection isn't easy though.<br /><br />Strength + 3<br />Happiness + 3<br />purpose + 3",
                              "obj_actions": ["STOP"],
                              "obj_destination": "age8_B"
                          }],
                          "age": "7"
                        },
                          "age7_B": {
                              "name": "Age 7",
                              "description": "Wow, your first few report cards are coming back with only A's. You parents are very proud. But what interests you more?<br />[Sciences] or [Theatre]",
                              "objects": [{
                                  "obj_name": "Sciences",
                                  "obj_description": "Wow, good on you for going into sciences, You can be what ever you want! Well, if you have the money to afford the education and grow up in a fortunate area of the world that accomidates the skills and job your looking for. Like i said, What ever you want. <br /><br /><br />Purpose + 4<br />Happines +2 ",
                                  "obj_actions": ["SCIENCES"],
                                  "obj_destination": "sciences"
                              },
                              {
                                  "obj_name": "Theatre",
                                  "obj_description": "Oh boy, you one of those kids. Welp best of luck surviving high school!<br /><br />Strength - 4<br />Happiness + 4<br />purpose + 2",
                                  "obj_actions": ["THEATRE"],
                                  "obj_destination": "age8_C"
                              }],
                              "age": "7"
                            },
                              "age7_C": {
                                  "name": "Age 7",
                                  "description": "Well, seems like you have found fortitued in gaming, but oh s***, two years have gone by?<br />[game]",
                                  "objects": [
                                  {
                                      "obj_name": "Game",
                                      "obj_description": "Issue with playing video games is time goes by way to quickly. Is it a waste of time, you tell me!<br /><br />Strength - 2<br />Happiness + 4<br />purpose - 2",
                                      "obj_actions": ["GAME"],
                                      "obj_destination": "age9_D"
                                  }],
                                  "age": "7"
                                },
                                  "age8_A": {
                                      "name": "Age 8",
                                      "description": "Seems like you need a place to put all this pumped up anger, how about joining a sports?<br />[Join sports]",
                                      "objects": [
                                      {
                                          "obj_name": "Join sports",
                                          "obj_description": "Good, some physical activity is a step in the right direction.<br /><br />Strength + 4<br />Happiness + 5",
                                          "obj_actions": ["JOIN SPORTS"],
                                          "obj_destination": "sports"
                                      }],
                                      "age": "8"
                                    },
                                      "age8_B": {
                                          "name": "Age 8",
                                          "description": "Time to explore your skills, join sport!<br />[Join sports]",
                                          "objects": [
                                          {
                                              "obj_name": "Join sports",
                                              "obj_description": "Good, some physical activity is a step in the right direction.<br /><br />Strength + 4<br />Happiness + 5",
                                              "obj_actions": ["JOIN SPORTS"],
                                              "obj_destination": "sports"
                                          }],
                                          "age": "8"
                                        },
                                          "sciences": {
                                              "name": "Age 8",
                                              "description": "Please chose a Science that you'd like to specialize in.<br />[Math] or [Chemistry] or [Physics] or [Biology]",
                                              "objects": [
                                              {
                                                  "obj_name": "Math",
                                                  "obj_description": "MATH! I see you like some numbers, well heres some numbers.<br /><br />Happiness + 2<br />Purpose + 5",
                                                  "obj_actions": ["MATH"],
                                                  "obj_destination": "age9_B"
                                              },
                                              {
                                                  "obj_name": "Physics",
                                                  "obj_description": "PHYSICS! Watch out for them apples.<br /><br />Happiness + 2<br />Purpose + 5",
                                                  "obj_actions": ["PHYSICS"],
                                                  "obj_destination": "age9_B"
                                              },
                                              {
                                                  "obj_name": "Chemistry",
                                                  "obj_description": "CHEMISTRY! Please just never use this in a pick up line.<br /><br />Happiness + 2<br />Purpose + 5",
                                                  "obj_actions": ["CHEMISTRY"],
                                                  "obj_destination": "age9_B"
                                              },
                                              {
                                                  "obj_name": "Biology",
                                                  "obj_description": "BIOLOGY! Did you know that I have one more bone then everyone else, it's called an EvenMoreFunny Bone, HA! because im funny, oh no, im not funny :(.<br /><br />Happiness + 2<br />Purpose + 5",
                                                  "obj_actions": ["BIOLOGY"],
                                                  "obj_destination": "age9_B"
                                              }],
                                              "age": "8"
                                            },
                                              "age8_C": {
                                                  "name": "Age 8",
                                                  "description": "Well you joined theatre. Kid, you know whats bound to happen.<br />[Get Bullied]",
                                                  "objects": [
                                                  {
                                                      "obj_name": "Get Bullied",
                                                      "obj_description": "Ouch, that looked like it hurt, play it off i guess.<br /><br />Strength - 2<br />Happiness - 2",
                                                      "obj_actions": ["GET BULLIED"],
                                                      "obj_destination": "age9_C"
                                                  }],
                                                  "age": "8"
                                                },
                                                  "sports": {
                                                      "name": "Sports",
                                                      "description": "Please chose a sport that you'd like to partake in.<br />[Soccer] or [Baseball] or [Hockey] or [Football]",
                                                      "objects": [
                                                      {
                                                          "obj_name": "Soccer",
                                                          "obj_description": "SOCCER!, Good team sport, very active, known for faking it but oh well.<br /><br />Happiness + 4<br />Strength + 2",
                                                          "obj_actions": ["SOCCER"],
                                                          "obj_destination": "age9_A"
                                                      },
                                                      {
                                                          "obj_name": "Baseball",
                                                          "obj_description": "Baseball! just watch out, you only got three strikes.<br /><br />Happiness + 4<br />Strength + 2",
                                                          "obj_actions": ["BASEBALL"],
                                                          "obj_destination": "age9_A"
                                                      },
                                                      {
                                                          "obj_name": "Hockey",
                                                          "obj_description": "HOCKEY! Please just don't think your better then everyone else.<br /><br />Happiness + 4<br />Strength + 2",
                                                          "obj_actions": ["HOCKEY"],
                                                          "obj_destination": "age9_A"
                                                      },
                                                      {
                                                          "obj_name": "Football",
                                                          "obj_description": "FOOTBALL! Wrongly named, should be called Hand ball, just saying.<br /><br />Happiness + 4<br />Strength + 2",
                                                          "obj_actions": ["FOOTBALL"],
                                                          "obj_destination": "age9_A"
                                                      }],
                                                      "age": "8"
                                                    },
                                                      "age9_A": {
                                                          "name": "Age 9",
                                                          "description": "This is a pinnicle point in your live, do you invest more time in sports or work!<br />[Sports] or [Work]",
                                                          "objects": [
                                                          {
                                                              "obj_name": "Sports",
                                                              "obj_description": "You decide to focus more on sports, aiming for that big scholarship. Sadly it did not come.<br /><br />Strength + 5<br />Happiness + 3",
                                                              "obj_actions": ["SPORTS"],
                                                              "obj_destination": "age18"
                                                          },
                                                          {
                                                              "obj_name": "Work",
                                                              "obj_description": "You decided to focus on work, you have managed to raise some money for post secondary school.<br /><br />Wealth + $20,000<br />Happiness - 2",
                                                              "obj_actions": ["WORK"],
                                                              "obj_destination": "age18"
                                                          }],
                                                          "age": "9"
                                                        },
                                                          "age9_B": {
                                                              "name": "Age 9",
                                                              "description": "This is a pinnicle point in your live, do you invest more time in sports or work!<br />[School] or [Work]",
                                                              "objects": [
                                                              {
                                                                  "obj_name": "School",
                                                                  "obj_description": "You decide to focus more on school, aiming for that big scholarship. Sadly it did not come.<br /><br />Purpose + 5<br />Happiness + 3",
                                                                  "obj_actions": ["SPORTS"],
                                                                  "obj_destination": "age18"
                                                              },
                                                              {
                                                                  "obj_name": "Work",
                                                                  "obj_description": "You decided to focus on work, you have managed to raise some money for post secondary school.<br /><br />Wealth + $20,000<br />Happiness - 2",
                                                                  "obj_actions": ["WORK"],
                                                                  "obj_destination": "age18"
                                                              }],
                                                              "age": "9"
                                                            },
                                                              "age9_C": {
                                                                  "name": "Age 9",
                                                                  "description": "This is a pinnicle point in your live, do you invest more time in sports or work!<br />[Theatre] or [Work]",
                                                                  "objects": [
                                                                  {
                                                                      "obj_name": "Theatre",
                                                                      "obj_description": "You decide to focus more on THEATRE, aiming for that big scholarship. Sadly it did not come.<br /><br />Purpose + 2<br />Happiness + 4<br />Strength - 4",
                                                                      "obj_actions": ["THEATRE"],
                                                                      "obj_destination": "age18"
                                                                  },
                                                                  {
                                                                      "obj_name": "Work",
                                                                      "obj_description": "You decided to focus on work, you have managed to raise some money for post secondary school.<br /><br />Wealth + $20,000<br />Happiness - 2",
                                                                      "obj_actions": ["WORK"],
                                                                      "obj_destination": "age18"
                                                                  }],
                                                                  "age": "9"
                                                                },
                                                                  "age9_D": {
                                                                      "name": "Age 9",
                                                                      "description": "This is a pinnicle point in your live, do you invest more time in sports or work!<br />[VideoGames] or [Work]",
                                                                      "objects": [
                                                                      {
                                                                          "obj_name": "VideoGames",
                                                                          "obj_description": "You decide to focus more on VideoGames, but sadly your level 12o blood-elf druid isn't going to save you from life.<br /><br />Purpose - 2<br />Happiness + 6<br />Strength - 2",
                                                                          "obj_actions": ["VIDEOGAMES"],
                                                                          "obj_destination": "age18"
                                                                      },
                                                                      {
                                                                          "obj_name": "Work",
                                                                          "obj_description": "You decided to focus on work, you have managed to raise some money for post secondary school.<br /><br />Wealth + $20,000<br />Happiness - 2",
                                                                          "obj_actions": ["WORK"],
                                                                          "obj_destination": "age18"
                                                                      }],
                                                                      "age": "9"
                                                                    },
                                                                      "age18": {
                                                                          "name": "Age 18",
                                                                          "description": "Here we go, time has flown by. You are now making the biggest decision of your life. Do you attend more school, or go straight into work?<br />[Post Secondary School] or [Work Full Time]",
                                                                          "objects": [
                                                                          {
                                                                              "obj_name": "Post Secondary School",
                                                                              "obj_description": "Good choice, this will cost you, but typically ends in a better life style after.<br /><br />Purpose + 2<br />Happiness - 4<br />Wealth - $50,000",
                                                                              "obj_actions": ["POST SECONDARY SCHOOL"],
                                                                              "obj_destination": "age19"
                                                                          },
                                                                          {
                                                                              "obj_name": "Work Full Time",
                                                                              "obj_description": "Give me the money kinda attitude, I like that. You manage to get a trade job that pays OK. <br /><br />Wealth + $40,000<br />Happiness - 4<br />Purpose + 2",
                                                                              "obj_actions": ["WORK FULL TIME"],
                                                                              "obj_destination": "age25"
                                                                          }],
                                                                          "age": "18"
                                                                        },
                                                                          "age19": {
                                                                              "name": "Age 19",
                                                                              "description": "First week of university, you already swamped with homework. Your buddies ask if you want to go out partying, do you?<br />[Partier] or [Studier]",
                                                                              "objects": [
                                                                              {
                                                                                  "obj_name": "Partier",
                                                                                  "obj_description": "Id tell you how time has gone by at the university, but honestly, you get so wasted you barely remember any of it.<br /><br />Purpose - 5",
                                                                                  "obj_actions": ["PARTIER"],
                                                                                  "obj_destination": "age22_A"
                                                                              },
                                                                              {
                                                                                  "obj_name": "Studier",
                                                                                  "obj_description": "You don't have much of a social life, but you are pretty smart by spending all your free time in the books. <br /><br />Happiness - 2<br />Purpose + 4",
                                                                                  "obj_actions": ["STUDIER"],
                                                                                  "obj_destination": "age22_B"
                                                                              }],
                                                                              "age": "19"
                                                                            },
                                                                              "age25": {
                                                                                  "name": "Age 25",
                                                                                  "description": "It been a few years now, you are making some money, but life is a little lonely, how will you fill the void?<br />[Alcohol and Drugs] or [Dating Sites]",
                                                                                  "objects": [
                                                                                  {
                                                                                      "obj_name": "Alcohol and Drugs",
                                                                                      "obj_description": "Life can get tough, sadly you consume your issues istead of facing them.<br /><br />Purpose - 5<br />Happiness - 10<br />Wealth + $40,000",
                                                                                      "obj_actions": ["ALCOHOL AND DRUGS"],
                                                                                      "obj_destination": "age27_A"
                                                                                  },
                                                                                  {
                                                                                      "obj_name": "Dating Sites",
                                                                                      "obj_description": "You don't have much of a social life, so you decide to hit up the dating sites. Why not, right. <br /><br />Wealth + $40,000",
                                                                                      "obj_actions": ["DATING SITES"],
                                                                                      "obj_destination": "age27_B"
                                                                                  }],
                                                                                  "age": "25"
                                                                                },
                                                                                  "age22_A": {
                                                                                      "name": "Age 22",
                                                                                      "description": "You have just finished university, but you got stuck with a job at your local retail store, maybe its because you focused more on partying then studying. As a result, you only see one path.<br />[Alcohol and Drugs]",
                                                                                      "objects": [
                                                                                      {
                                                                                          "obj_name": "Alcohol and Drugs",
                                                                                          "obj_description": "Life can get tough, sadly you consume your issues istead of facing them.<br /><br />Purpose - 5<br />Happiness - 10<br />Wealth + $40,000",
                                                                                          "obj_actions": ["ALCOHOL AND DRUGS"],
                                                                                          "obj_destination": "age27_A"
                                                                                      }],
                                                                                      "age": "22"
                                                                                    },
                                                                                      "age22_B": {
                                                                                          "name": "Age 22",
                                                                                          "description": "You have just finished university and your looking for a job. But you need to get your morals in line, what would you like to focus more on?<br />[Money] or [Happiness]",
                                                                                          "objects": [
                                                                                          {
                                                                                              "obj_name": "Money",
                                                                                              "obj_description": "You have decided to focus on money, who said you couldn't buy happiness!<br /><br />Purpose + 2<br />Happiness + 3<br />Wealth + $100,000",
                                                                                              "obj_actions": ["MONEY"],
                                                                                              "obj_destination": "age65_A"
                                                                                          },
                                                                                          {
                                                                                              "obj_name": "Happiness",
                                                                                              "obj_description": "You have decided to focus on Happiness. And as a result, you have improved your lifestyle and become physically fit. You see your self worth and appreciate the small things in life.<br /><br />Purpose + 3<br />Happiness + 10<br />Wealth + $70,000",
                                                                                              "obj_actions": ["HAPPINESS"],
                                                                                              "obj_destination": "age65_B"
                                                                                          }],
                                                                                          "age": "22"
                                                                                        },
                                                                                          "age27_A": {
                                                                                              "name": "Age 27",
                                                                                              "description": "Your losing control of your life, all the alcohol and drugs have consumed your life. You have lost your job and are now living on the streets. Sadly your time has come, and you can't take it anymore, you pick up the syringe, and stick it in your arm, you push down on the top of the syringe and all fades to black.<br />[Death]",
                                                                                              "objects": [
                                                                                              {
                                                                                                  "obj_name": "Death",
                                                                                                  "obj_description": "GAME OVER",
                                                                                                  "obj_actions": ["DEATH"],
                                                                                                  "obj_destination": "menu"
                                                                                              }],
                                                                                              "age": "27"
                                                                                            },
                                                                                              "age27_B": {
                                                                                                  "name": "Age 27",
                                                                                                  "description": "You decided to go on a dating site, but which one will satisfy your needs.<br />[Christian Mingle] or [Tinder]",
                                                                                                  "objects": [
                                                                                                  {
                                                                                                      "obj_name": "Christian Mingle",
                                                                                                      "obj_description": "A great site that has people that honour the bible. Morals are key when it comes to what your looking for.<br /><br />Happiness + 3<br />Wealth + $40,000 ",
                                                                                                      "obj_actions": ["CHRISTIAN MINGLE"],
                                                                                                      "obj_destination": "age35_A"
                                                                                                  },
                                                                                                  {
                                                                                                      "obj_name": "Tinder",
                                                                                                      "obj_description": "Ah, I see you like swiping right on everyone until you get the chance to have an awkward text conversation that might lead to the netflix and chills. Who knows, some people even get married from this app<br /><br />Happiness + 3<br />Wealth + $40,000",
                                                                                                      "obj_actions": ["TINDER"],
                                                                                                      "obj_destination": "age35_B"
                                                                                                  }],
                                                                                                  "age": "27"
                                                                                                },
                                                                                                  "age65_A": {
                                                                                                      "name": "Age 65",
                                                                                                      "description": "You have decided to chase the doller. This has benefited you financially but was quite taxing on your body. But, now that your 65, its time to retire.<br />[Retire]",
                                                                                                      "objects": [
                                                                                                      {
                                                                                                          "obj_name": "Retire",
                                                                                                          "obj_description": "Ah, a glass of the finest red wine, from the local orchard just down the road. Your sitting in your rocking chair, reflecting the hard work you have acheived throughout your life.<br /><br />Happiness + 6<br />Wealth + $200,000 ",
                                                                                                          "obj_actions": ["RETIRE"],
                                                                                                          "obj_destination": "age80"
                                                                                                      }],
                                                                                                      "age": "65"
                                                                                                    },
                                                                                                      "age65_B": {
                                                                                                          "name": "Age 65",
                                                                                                          "description": "You have decided to chase Happiness. Despite not making as much money as you could have acheived, you feel great at the age of 65. Once you retire, you can travel and relax.<br />[Retire Now]",
                                                                                                          "objects": [
                                                                                                          {
                                                                                                              "obj_name": "Retire Now",
                                                                                                              "obj_description": "Ah, a glass of the finest red wine, from the local orchard just down the road. Your sitting in your rocking chair, reflecting the hard work you have acheived throughout your life.<br /><br />Happiness + 12<br />Purpose + 6<br />Wealth + $100,000 ",
                                                                                                              "obj_actions": ["RETIRE NOW"],
                                                                                                              "obj_destination": "age95"
                                                                                                          }],
                                                                                                          "age": "65"
                                                                                                        },
                                                                                                          "age35_A": {
                                                                                                              "name": "Age 35",
                                                                                                              "description": "You spent some time on christian mingle and found yourself the perfect partner. You lit a candle, threw some rose pettles down, and the rest is history. When you went to the docter, they said that you are having...<br />[Twins]",
                                                                                                              "objects": [
                                                                                                              {
                                                                                                                  "obj_name": "Twins",
                                                                                                                  "obj_description": "You are getting older now, you have had kids, they have moved out. Its time to leave some inheritence.<br />2<br />Purpose + 4<br />Wealth - $100,000 ",
                                                                                                                  "obj_actions": ["TWINS"],
                                                                                                                  "obj_destination": "age80"
                                                                                                              }],
                                                                                                              "age": "35"
                                                                                                            },
                                                                                                              "age35_B": {
                                                                                                                  "name": "Age 35",
                                                                                                                  "description": "An addiction has start, you mUST SWIPPPPPPE!!!!!<br />[Swipe]",
                                                                                                                  "objects": [
                                                                                                                  {
                                                                                                                      "obj_name": "Swipe",
                                                                                                                      "obj_description": "SWIPE SWIPE SWIPE SWIPE",
                                                                                                                      "obj_actions": ["SWIPE"],
                                                                                                                      "obj_destination": "age40"
                                                                                                                  }],
                                                                                                                  "age": "35"
                                                                                                                },
                                                                                                                  "age80": {
                                                                                                                      "name": "Age 80",
                                                                                                                      "description": "You are now 80 years old. Your time has come to leave all that you have done behind.<br />[Death]",
                                                                                                                      "objects": [
                                                                                                                      {
                                                                                                                          "obj_name": "Death",
                                                                                                                          "obj_description": "GAME OVER",
                                                                                                                          "obj_actions": ["DEATH"],
                                                                                                                          "obj_destination": "menu"
                                                                                                                      }],
                                                                                                                      "age": "80"
                                                                                                                    },
                                                                                                                      "age95": {
                                                                                                                          "name": "Age 95",
                                                                                                                          "description": "You are now 95 years old. Your time has come to leave all that you have done behind.<br />[Death]",
                                                                                                                          "objects": [
                                                                                                                          {
                                                                                                                              "obj_name": "Death",
                                                                                                                              "obj_description": "GAME OVER",
                                                                                                                              "obj_actions": ["DEATH"],
                                                                                                                              "obj_destination": "menu"
                                                                                                                          }],
                                                                                                                          "age": "95"
                                                                                                                        },
                                                                                                                          "age40": {
                                                                                                                              "name": "Age 40",
                                                                                                                              "description": "Depression kicks in, BUT YOU MUST KEEEEEP SWIPPPPPPINNNGGGGG!!!!!<br />[Swipe]",
                                                                                                                              "objects": [
                                                                                                                              {
                                                                                                                                  "obj_name": "Swipe",
                                                                                                                                  "obj_description": "SWIPE SWIPE SWIPE SWIPE SWIPE",
                                                                                                                                  "obj_actions": ["SWIPE"],
                                                                                                                                  "obj_destination": "age45"
                                                                                                                              }],
                                                                                                                              "age": "40"
                                                                                                                            },
                                                                                                                              "age45": {
                                                                                                                                  "name": "Age 45",
                                                                                                                                  "description": "You have ran out of people to swipe on, you feel defeated. Your life is useless. There's only one option now.<br />[Death]",
                                                                                                                                  "objects": [
                                                                                                                                  {
                                                                                                                                      "obj_name": "Death",
                                                                                                                                      "obj_description": "GAME OVER",
                                                                                                                                      "obj_actions": ["DEATH"],
                                                                                                                                      "obj_destination": "menu"
                                                                                                                                  }],
                                                                                                                                  "age": "45"
                                                                                                                                }


};
