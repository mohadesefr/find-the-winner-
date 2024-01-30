const arrayName = [
    'sadeghi.mm66',
    'moradi.z45',
    'ziz.imoradi',
    'bitaaa303',
    'kmoha.dese',
    'kazemiiii.71',
    'kazemiiii.71',
    'kazemiiii.71',
    'a_b_c___meh',
    'zeinab.4',
    'modese.73',
    '_zahramtz_',
    'a_b_c___meh',
    'raha24.135',
    'saeeed_jlly',
    'aram_aramy_',
    'mohammadmahan1391nwrw',
    'pharmfam1375',
    'mohammad_amlah',
    'a_b_c___meh',
    'raha24.135',
    'raha24.135',
    'malihe_sht59',
    'hesamm444',
    'sheyma_amiri',
    'zahra_shikhy2'
]


const count = {};
arrayName.forEach(function(name){
    count[name] = (count[name] || 0) + 1;
})


const finalList = [];
for (const [name, occurrences] of Object.entries(count)) {
    if (occurrences === 3) {
        finalList.push(name);
        console.log(finalList.length)
    }
}



