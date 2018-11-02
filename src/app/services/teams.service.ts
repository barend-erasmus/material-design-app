import { Injectable } from '@angular/core';
import { ITeam } from '../models/team';

@Injectable({
  providedIn: 'root',
})
export class TeamsService {
  protected teams: Array<ITeam> = [
    {
      country: 'China',
      description: [
        // tslint:disable-next-line:max-line-length
        'Dongfeng Race Team are back for a second shot at the Volvo Ocean Race under inspirational French skipper Charles Caudrelier, after far exceeding expectations with a podium finish in 2014-15.',
        // tslint:disable-next-line:max-line-length
        'This time, the team is 100% backed by Dongfeng Motor Corporation, the Chinese motor manufacturer headquartered in the Hubei province city of Wuhan – and is once again committed to developing the sport of offshore sailing in China.',
        // tslint:disable-next-line:max-line-length
        'Caudrelier’s mixed crew will again include Chinese sailors – and the French skipper has boosted his squad with world-class offshore ocean racers from around the globe.',
        // tslint:disable-next-line:max-line-length
        'Having won hearts and minds worldwide in 2014-15 with their open and innovative approach to storytelling, Dongfeng are looking to go better – and win the Volvo Ocean Race for the first time in China’s history.',
      ],
      flag: 'https://www.volvooceanrace.com/static/assets/2017-18/dist/img/flags/1x1/cn.svg',
      image:
        'https://www.volvooceanrace.com/static/assets/2017-18/cropped/1034/m103309_crop110015_800x800_proportional_1507016031BA7C.png',
      name: 'Dongfeng',
      video: 'https://www.youtube.com/embed/8mr9MgXvDRs',
      // tslint:disable-next-line:max-line-length
      videoDescription: 'After 45,000 miles, skipper Charles Caudrelier led his team over the finish in The Hague to the ultimate glory – the first time a Chinese campaign has won the trophy. Here\'s a look at how they did it.',
    },
    {
      country: 'Spain',
      description: [
        // tslint:disable-next-line:max-line-length
        'MAPFRE return to the Volvo Ocean Race and their goal could not be clearer – to win the Volvo Ocean Race trophy for the first time in Spain’s history.',
        // tslint:disable-next-line:max-line-length
        'Skipper Xabi Fernández has built a mixed and multinational squad brimming with honours – from Olympic gold medallists and America’s Cup winners, to some of the most highly regarded offshore sailors on the planet.',
        'After finishing in fourth place last time out, it’s fair to say that MAPFRE look stronger than ever before in 2017-18.',
      ],
      flag: 'https://www.volvooceanrace.com/static/assets/2017-18/dist/img/flags/1x1/es.svg',
      image:
        'https://www.volvooceanrace.com/static/assets/2017-18/cropped/1051/m105086_crop110015_800x800_proportional_15090241658F87.png',
      name: 'MAPFRE',
      video: 'https://www.youtube.com/embed/6mVC_GGLHJY',
      // tslint:disable-next-line:max-line-length
      videoDescription: 'Led by Xabi Fernández, MAPFRE went into the Race as title favourites and consistently posted podium after podium – taking them closer to Spain\'s first ever Race win than ever before...',
    },
    {
      country: 'Netherlands',
      description: [
        // tslint:disable-next-line:max-line-length
        'No one has sailed more miles in the Volvo Ocean Race than Team Brunel skipper Bekking, who made his first appearance as a crew member on Philips Innovator back in 1985-86.',
        // tslint:disable-next-line:max-line-length
        'More than 30 years on, and now aged 54, Bekking’s Volvo Ocean Race obsession has only intensified – and he’s still chasing an elusive first win.',
        // tslint:disable-next-line:max-line-length
        'Team backers include Brunel, the Dutch-based global project management, recruitment and consultancy company, and its founder Jan Brand. Brunel are Volvo Ocean Race veterans themselves, having had their first involvement in 1997-98, and they’re the fourth major sponsor to return for a second consecutive edition in 2017-18, alongside MAPFRE, Dongfeng and Vestas.',
      ],
      flag: 'https://www.volvooceanrace.com/static/assets/2017-18/dist/img/flags/1x1/nl.svg',
      image:
        'https://www.volvooceanrace.com/static/assets/2017-18/cropped/1049/m104862_crop110015_800x800_proportional_150885452432CC.png',
      name: 'Brunel',
      video: 'https://www.youtube.com/embed/teYGD3JEV6c',
      // tslint:disable-next-line:max-line-length
      videoDescription: 'With eight-time veteran Bouwe Bekking and sailing superstar Peter Burling onboard, plus a mix of rookies and veterans, Team Brunel were a formidable team, rising rapidly to challenge for the trophy in the second half of the race.',
    },
    {
      country: 'Netherlands',
      description: [
        'Team AkzoNobel is a brand-new Dutch ocean racing team backed by leading global paints and coatings company, AkzoNobel.',
        'The team was the first entry in the 2017-18 edition - continuing the remarkable legacy of Dutch teams competing in the race.',
        // tslint:disable-next-line:max-line-length
        'With a grand finale in The Hague in June 2018, Dutch fans can get closer to their heroes than ever before and they are sure to be right behind the team AkzoNobel sailors as they race into their home port.',
      ],
      flag: 'https://www.volvooceanrace.com/static/assets/2017-18/dist/img/flags/1x1/nl.svg',
      image:
        'https://www.volvooceanrace.com/static/assets/2017-18/cropped/1034/m103307_crop110015_800x800_proportional_1507016027D52A.png',
      name: 'AkzoNobel',
      video: 'https://www.youtube.com/embed/QzyREZB_xBI',
      // tslint:disable-next-line:max-line-length
      videoDescription: 'With a mix of youth and experience, team AkzoNobel, skippered by Simeon Tienpont, chalked up impressive results around the world – picking up a new all-time 24 hour Volvo Ocean Race speed record in the process.',
    },
    {
      country: 'USA/Denmark',
      description: [
        // tslint:disable-next-line:max-line-length
        'Vestas are back in the Volvo Ocean Race after their against-the-odds comeback story in 2014-15. This time, their campaign is being run in full partnership with 11th Hour Racing, a programme of The Schmidt Family Foundation working to implement real change on marine health.',
        // tslint:disable-next-line:max-line-length
        'Vestas 11th Hour Racing are led by the American duo of Charlie Enright and Mark Towill, who had their first taste of the Volvo Ocean Race in the last edition with Alvimedica.',
        // tslint:disable-next-line:max-line-length
        'They ended that race on a high, adding a victory in the final ocean leg to their two In-Port Race wins, and for this edition, they have twin goals – to do well on the water and promote a sustainable message across the world.',
      ],
      flag: 'https://www.volvooceanrace.com/static/assets/2017-18/dist/img/flags/1x1/usdi.svg',
      image:
        'https://www.volvooceanrace.com/static/assets/2017-18/cropped/1034/m103314_crop110015_800x800_proportional_150701604287B0.png',
      name: 'Vestas',
      video: 'https://www.youtube.com/embed/AvqclgmNYeU',
      videoDescription: 'Here\'s how we inspired millions of people to turn the tide on plastic in 2017-18',
    },
    {
      country: 'United Nations',
      description: [
        // tslint:disable-next-line:max-line-length
        'Turn the Tide on Plastic is a mixed, youth focused team with a strong sustainability message, led by Britain’s Dee Caffari. The campaign, backed by the principle sustainability partner the Mirpuri Foundation, and Ocean Family Foundation, is dedicated to the issue of ocean health. The campaign is also supported by Sky Ocean Rescue who recently became a media partner to the team to help raise awareness of the issues our oceans face.',
        // tslint:disable-next-line:max-line-length
        'The team’s guiding mission is to amplify United Nations Environment’s \'Clean Seas: Turn the Tide on Plastic\' campaign throughout the eight months of the race.',
        // tslint:disable-next-line:max-line-length
        'Caffari is building a multinational, 50-50 male-female squad, with the majority under 30 years of age. Alongside the sustainability focus, the messages around inclusivity in age and gender will be strong themes of a campaign that in sporting terms may not start as a favourite, but could easily surprise on the water.',
      ],
      flag: 'https://www.volvooceanrace.com/static/assets/2017-18/dist/img/flags/1x1/un.svg',
      image:
        'https://www.volvooceanrace.com/static/assets/2017-18/cropped/1049/m104861_crop110015_800x800_proportional_1508854583BEA0.png',
      name: 'Turn the Tide on Plastic',
      video: 'https://www.youtube.com/embed/-z17up5EfQ4',
      // tslint:disable-next-line:max-line-length
      videoDescription: 'Passionately carrying a strong #cleanseas environmental campaign, skipper Dee Caffari led a diverse, young crew determined to make an impact on and off the water.',
    },
    {
      country: 'Hong King',
      description: [
        // tslint:disable-next-line:max-line-length
        'Representing Hong Kong, Sun Hung Kai/Scallywag are led by experienced heavy weather sailor David Witt and go into the race with an added goal to promote competitive sailing in Asia, while building a long-lasting youth sailing legacy.',
        // tslint:disable-next-line:max-line-length
        'The team, backed by Hong Kong-based Seng Huang Lee and Sun Hung Kai & Co, have a core with plenty of experience sailing together and in David Witt they have a leader who knows the race well, with the Australian returning to compete for a second time, 20 years on from his debut with Innovation Kvaerner.',
      ],
      flag: 'https://www.volvooceanrace.com/static/assets/2017-18/dist/img/flags/1x1/hk.svg',
      image:
        'https://www.volvooceanrace.com/static/assets/2017-18/cropped/1034/m103320_crop110015_800x800_proportional_1507024416EBA5.png',
      name: 'Sun Hung Kai/Scallywag',
      video: 'https://www.youtube.com/embed/wrQBWt8UT8I',
      // tslint:disable-next-line:max-line-length
      videoDescription: 'In the first of 7 look back films on the 2017-18 Volvo Ocean Race, here\'s the story of the first ever Hong Kong entry',
    },
  ];

  constructor() {}

  public find(name: string): ITeam {
    return this.teams.find((team: ITeam) => team.name === name);
  }

  public findAll(): Array<ITeam> {
    return this.teams;
  }
}
