var countriesWeighted = {
    'Afghanistan': 2,
    'Albania': 1,
    'Algeria': 1,
    'Andorra':1,
    'Angola': 1,
    'Anguilla': 1,
    'Antigua and Barbuda': 1,
    'Argentina': 2,
    'Armenia': 1,
    'Aruba': 1,
    'Australia': 2,
    'Austria': 1,
    'Azerbaijan': 1,
    'Bahamas': 1,
    'Bahrain': 1,
    'Bangladesh': 1,
    'Barbados': 1,
    'Belarus': 1,
    'Belgium': 1,
    'Belize': 1,
    'Benin': 1,
    'Bermuda': 1,
    'Bhutan': 1,
    'Bolivia': 1,
    'Bosnia and Herzegovina': 1,
    'Botswana': 1,
    'Brazil': 3,
    'British Virgin Islands': 1,
    'Brunei': 1,
    'Bulgaria': 1,
    'Burkina Faso': 1,
    'Burundi': 1,
    'Cambodia': 1,
    'Cameroon': 1,
    'Cape Verde': 1,
    'Cayman Islands': 1,
    'Chad': 1,
    'Chile': 1,
    'China': 3,
    'Colombia': 2,
    'Congo': 1,
    'Cook Islands': 1,
    'Costa Rica': 1,
    'Cote D Ivoire': 1,
    'Croatia': 1,
    'Cuba': 2,
    'Cyprus': 1,
    'Czech Republic': 1,
    'Denmark': 1,
    'Djibouti': 1,
    'Dominica': 1,
    'Dominican Republic': 1,
    'Ecuador': 1,
    'Egypt': 2,
    'El Salvador': 1,
    'Equatorial Guinea': 1,
    'Estonia': 1,
    'Ethiopia': 1,
    'Falkland Islands': 1,
    'Faroe Islands': 1,
    'Fiji': 1,
    'Finland': 1,
    'France': 2,
    'French Polynesia': 2,
    'French West Indies': 1,
    'Gabon': 1,
    'Gambia': 1,
    'Georgia': 1,
    'Germany': 2,
    'Ghana': 1,
    'Gibraltar': 1,
    'Greece': 1,
    'Greenland': 1,
    'Grenada': 1,
    'Guam': 1,
    'Guatemala': 1,
    'Guernsey': 1,
    'Guinea': 1,
    'Guinea Bissau': 1,
    'Guyana': 1,
    'Haiti': 1,
    'Honduras': 1,
    'Hungary': 1,
    'Iceland': 1,
    'India': 3,
    'Indonesia': 2,
    'Iran': 2,
    'Iraq': 1,
    'Ireland': 1,
    'Israel': 2,
    'Italy': 2,
    'Jamaica': 1,
    'Japan': 2,
    'Jordan': 1,
    'Kazakhstan': 1,
    'Kenya': 1,
    'Kuwait': 1,
    'Kyrgyzstan': 1,
    'Laos': 1,
    'Latvia': 1,
    'Lebanon': 1,
    'Lesotho': 1,
    'Liberia': 1,
    'Libya': 1,
    'Liechtenstein': 1,
    'Lithuania': 1,
    'Luxembourg': 1,
    'Macau': 1,
    'Macedonia': 1,
    'Madagascar': 1,
    'Malawi': 1,
    'Malaysia': 1,
    'Maldives': 1,
    'Mali': 1,
    'Malta': 1,
    'Mauritania': 1,
    'Mauritius': 1,
    'Mexico': 2,
    'Moldova': 1,
    'Monaco': 1,
    'Mongolia': 1,'Montenegro': 1,
    'Montserrat': 1,
    'Morocco': 1,
    'Mozambique': 1,
    'Namibia': 1,
    'Nepal': 1,
    'Netherlands': 1,
    'New Caledonia': 1,
    'New Zealand': 1,
    'Nicaragua': 1,
    'Niger': 1,
    'Nigeria': 1,
    'Norway': 2,
    'Oman': 1,
    'Pakistan': 2,
    'Panama': 1,
    'Papua New Guinea': 1,
    'Paraguay': 1,
    'Peru': 1,
    'Philippines': 2,
    'Poland': 2,
    'Portugal': 1,
    'Qatar': 1,
    'Romania': 1,
    'Russia': 3,
    'Rwanda': 1,
    'Samoa': 1,
    'San Marino': 1,
    'Saudi Arabia': 2,
    'Senegal': 1,
    'Serbia': 1,
    'Seychelles': 1,
    'Sierra Leone': 1,
    'Singapore': 2,
    'Slovakia': 1,
    'Slovenia': 1,
    'South Africa': 1,
    'South Korea': 2,
    'Spain': 2,
    'Sri Lanka': 1,
    'St Kitts and Nevis': 1,
    'St Lucia': 1,
    'St Vincent': 1,
    'St. Lucia': 1,
    'Sudan': 1,
    'Suriname': 1,
    'Swaziland': 1,
    'Sweden': 1,
    'Switzerland': 2,
    'Syria': 1,
    'Tajikistan': 1,
    'Tanzania': 1,
    'Thailand': 1,
    "Timor L'Este": 1,
    'Togo': 1,
    'Tonga': 1,
    'Trinidad and Tobago': 1,
    'Tunisia': 1,
    'Turkey': 2,
    'Turkmenistan': 1,
    'Turks and Caicos': 1,
    'Uganda': 1,
    'Ukraine': 2,
    'United Arab Emirates': 2,
    'United Kingdom': 2,
    'Uruguay': 1,
    'Uzbekistan': 1,
    'Venezuela': 2,
    'Vietnam': 1,
    'Yemen': 1,
    'Zambia': 1,
    'Zimbabwe': 1
};

var committees = [
    {
        'committee' : 'Disarmament and International Security (DISEC)',
        'topics' : [
            'Cyber Security', 'Militarization of Space', 'Terrorism', 'Imperalism'
            ]
    },
    {
        'committee' : 'Human Rights Council (HRC)',
        'topics' : [
            'Israel-Palestine Conflict', 'Syrian Civil War', 'Child Soldiers', 'Human Trafficking'
        ]
    },
    {
        'committee' : 'Security Council (UNSC)',
        'topics' : [
            'Islamic Extremists', 'Territorial Aggression', 'Nuclear Proliferation', 'Placement of Weapons in Space'
        ]
    },
    {
        'committee' : 'United Nations Economic and Social Council (ECOSOC)',
        'topics' : [
            'Internet Censorship', 'Tariffs', 'Water Pollution', 'Deforestation'
        ]
    },
    {
        'committee': 'United Nations Women',
        'topics': [
            'Violence Against Women', 'Gender Equality', 'Job Discrimination', 'Freedom of Speech'
        ]
    },
    {
        'committee': 'United Nations Environment Programme (UNEP)',
        'topics': [
            'Sinking Islands', 'Melting Glaciers', 'Destruction of Rainforests', 'Endangered Species'
        ]
    },
    {
        'committee': 'World Health Organization (WHO)',
        'topics': [
            'Access to Medicine', 'Epidemics', 'Mandatory Dentistry Laws', 'Human Body in Space'
        ]
    },
    {
        'committee': 'Food and Agricultural Organization (FAO)',
        'topics': [
            'Global Food Waste', 'Global Allergy Regulations', 'Illegal Foods', 'Consumption of Endangered Species'
        ]
    },
    {
        'committee': "United Nations Children's Fund (UNICEF)",
        'topics': [
            'Access to Education', 'Child Labor', 'Orphan Laws', 'Trafficking of Children'
        ]
    },
    {
        'committee': 'Office of the United Nations High Commissioner on Refugees (UNHCR)',
        'topics': [
            'Climate Change-Related Disasters', 'Trapped Populations', 'Right to Migration', 'Exploitation of Refugees'
        ]
    },
    {
        'committee': 'Legal Committee',
        'topics': [
            'Drone Laws', 'Legal Rebellion', 'Endangered Species Laws', 'Jurisdiction of Space'
        ]
    },
    {
        'committee': 'United Nations Development Programme (UNDP)',
        'topics': [
            'Orphan Rights', 'Decaying Infrastructure', 'Chronic Rural Poverty', 'International Monitary Fund'
        ]
    },
    {
        'committee': 'United Nations Economic, Social, and Cultural Organization (UNESCO)',
        'topics': [
            'Educating Migrants', 'Equality of Education', 'Religious Tension', 'Cultural Imperialism'
        ]
    },
    {
        'committee': 'Committee on Crime Prevention and Criminial Justice (CCPCJ)',
        'topics': [
            'Capital Punishment', 'Cyber Crime', 'Drug Trafficking', '3D-Printed Weapons'
        ]
    }


];

var taken = {};
var countries;

function randint(lo, hi) {
    return Math.floor(Math.random()*(hi-lo))+lo;
}

function getCountry() {
    if (Object.keys(taken).length >= countries.length) {
        return 'There are no more countries.';
    } else if (Object.keys(taken) >= Object.keys(countriesWeighted).length/1.2) { // randoms might cause delays
        for (var country of countries) {
            if (!taken.hasOwnProperty(taken)) {
                return country;
            }
	    }
    } else {
        while (true) {
            var country = countries[randint(0, countries.length)];

            console.log(country)
            if (!taken.hasOwnProperty(country)) {
                return country;
            }
        }
    }
}

function getTopic() {
    var comNum = randint(0, committees.length);
    var topicNum = randint(0, committees[comNum]['topics'].length);
    var committee = committees[comNum]['committee'];
    var topic = committees[comNum]['topics'][topicNum];

    return {'committee' : committee, 'topic' : topic};
}
function genCommittee(numCountries = 1) {
    var result = getTopic();

    taken = {};

    for (var i=0; i<numCountries; i++) {
        taken[getCountry()] = true;
    }
    result['countries'] = Object.keys(taken);

    return result;
}
function initCountries() {
    countries = [];

    for (var name of Object.keys(countriesWeighted)) {
        for (var i=0; i<4**countriesWeighted[name]; i++) {
            countries.push(name);
        }
    }
}
