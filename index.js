import { intro, outro, text, spinner, select, multiselect } from '@clack/prompts';
import color from 'picolors';

intro('Hello, Welcome to the Football Quiz!! Test your knowledge');

const QuestionArrayList = ['Sadio Mane', 'Uruguay'];

async function askQuestion() {
    const s = spinner();
    s.start('Loading...');

    const hattrick = await text({
        message: 'Which player scored the fastest hat-trick in the Premier League?',
        placeholder: 'Enter player name',
        validate(value) {
            if (value.length === 0) return 'Value is required';
        }
    });

    s.stop();

    const worldcup = await select({
        message: 'Which country won the first ever World Cup in 1930?',
        options: [
            { value: 'Brazil', label: 'Brazil' },
            { value: 'Germany', label: 'Germany' },
            { value: 'Uruguay', label: 'Uruguay' }
        ],
        required: true
    });

    const additionalTools = await multiselect({
        message: 'Three players share the record for most Premier League red cards (8). Who are they?',
        options: [
            { value: 'Viera', label: 'Viera' },
            { value: 'Dunne', label: 'Dunne' },
            { value: 'Ferguson', label: 'Ferguson' },
            { value: 'Scholes', label: 'Scholes' },
            { value: 'Cocquelin', label: 'Cocquelin' },
        ],
        validate(value) {
            if (value.length === 0) return 'At least one option is required';
        }
    });

    // You can process the answers here, e.g., displaying them
    console.log(color.green(`Fastest hat-trick: ${hattrick}`));
    console.log(color.green(`World Cup winner: ${worldcup}`));
    console.log(color.green(`Red card holders: ${additionalTools.join(', ')}`));
}

await askQuestion(); // Ensure to call the function

outro('Thanks for playing the Football Quiz!!');
