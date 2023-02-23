const specifics = {
    3 : 11, // up
    6: 17, // up
    9: 18, // up
    10: 12, // up
    14: 4, // down
    19 :8, // down
    22 : 20, // down
    24 : 16, // down
}

console.log(specifics[6])

class player{
    constructor(name){
        this.name = name;
        this.position = 0;
        this.player_feedback = "";
    }

    // player movement method
    move(dice){
        this.position += dice
        if(this.position in specifics){
            if(this.position > specifics[this.position]){
                this.player_feedback = "Jugador desciende al"
            }else{
                this.player_feedback = "Jugador sube por la escalera al"
            }
            this.position = specifics[this.position]
        }else{
            this.player_feedback = "Jugador avanza a"
        }
    }

    // feedback message setting method
    set_feedback(message){
        this.player_feedback = message
    }
}

function main(){
    const myplayer = new player("noNPCboy")
    
    let i = 0

    while(myplayer.position<26){
        const dice_value = Math.ceil(Math.random() * 6)
        console.log(`Dado arroja ${dice_value}`)
        myplayer.move(dice_value)
        console.log(`${myplayer.player_feedback} cuadro ${myplayer.position}`)
        i++;
    }

    console.log("Jugador supera el cuadro 25")
}

main()