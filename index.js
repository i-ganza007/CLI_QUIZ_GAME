import * as p from '@clack/prompts';
import color from 'picolors';

intro('Hello, Welcome to the Football Quiz!! Test your knowledge');

function main(){
    p.intro(color.bgGreen('Hello, Welcome to my football quiz!!!'));

    let results = 0;

    const project = p.group({
        
        username:()=>p.text({
            message:'What is your name ?',
            validate:(value)=>{
                if(value.length===0) return 'Please enter the design';
            }

            
        }
        if (isCancel(value)) {
            cancel('Operation cancelled.');
            process.exit(0);
          }
    ),

        worldcup : ()=>p.text({
            message:'Which player scored the fastest hat-trick in the Premier League?',
            validate(value){
                if(value.length==0 || isNaN(value)) return 'Enter a valid answer';
            }
        }
    
        if (isCancel(value)) {
            cancel('Operation cancelled.');
            process.exit(0);
          }
    
    ),

        countries: () => p.multiselect({
            message:'The 2026 World Cup will be hosted across three different countries. Can you name them?',
            options: [
                { value: 'United States',label:'United States' },
                { value: 'Canada ',label:'Canada ' },
                { value: 'Mexico',label:'Mexico' },
                { value: 'Nicaragua',label:'Nicaragua' },
                { value: 'Austria',label:'Austria' }
            ],

        }
    ),

        galaxy : () => p.confirm({
            message: 'Does Cristiano Ronaldo have a galaxy named after him ?',
        }),

        topscorer : () => p.text({
            message:'With 260 goals, who is the Premier League'/s all-time top scorer?',
            validate(value){
                if(value.length==0 || isNaN(value)) return 'Enter a valid answer';
            }
        }),


        




    });

    {
        onCancel: () => {
            p.cancel('Operation cancelled.');
            process.exit(0);
        },
}

outro('Thanks for playing the Football Quiz!!');
