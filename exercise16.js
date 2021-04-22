const bar = text => {
    return 'Cat' + text.slice(2);
}

const originalTexts = [
    '',
    'x',
    'Cat',
    'Foobar',
    'Potato',
    'Tomato',
    'International Space Station'
]

originalTexts.forEach( text => {
    console.log(`'${text}' => '${bar(text)}'`);
})
