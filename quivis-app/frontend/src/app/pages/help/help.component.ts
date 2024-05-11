import { Component, OnInit } from '@angular/core';

@Component({
    templateUrl: './help.component.html'
})
export class HelpComponent implements OnInit {

    items: any[] = [];
    answers: any[] = [];

    activeIndex: number = 0;

    constructor() { }

    ngOnInit(): void {
        this.items = [
            { 
                label: 'Bedienung', 
                icon: 'pi pi-fw pi-info-circle', 
                questions: [
                    'Dashboard', 
                    'Medizinische Historie', 
                    'Medikationsplan', 
                    'Frag Claude'
                ] 
            },
            
            { 
                label: 'Häufig gestellte Fragen', 
                icon: 'pi pi-fw pi-question-circle', 
                questions: [
                    'Was ist Quivis?', 
                    'Wie funktioniert Quivis?'
                ] 
            },
        ];

        this.answers = [
            {
                'Dashboard': 'Das Dashboard ist die Startseite von Quivis. Hier finden Sie alle wichtigen Informationen auf einen Blick. Sie können Ihre Medikamente eintragen, Ihre Medizinische Historie einsehen und mit Claude chatten.',
                'Medizinische Historie': 'In der Medizinischen Historie können Sie alle Ihre Arztbesuche, Diagnosen und Behandlungen eintragen. So haben Sie alle wichtigen Informationen immer griffbereit.',
                'Medikationsplan': 'Im Medikationsplan können Sie alle Ihre Medikamente eintragen. Sie können die Dosierung, die Einnahmezeit und die Dauer der Einnahme festlegen. So haben Sie immer im Blick, wann Sie welche Medikamente einnehmen müssen.',
                'Frag Claude': 'Claude ist Ihr persönlicher Gesundheitsassistent. Sie können ihm alle Fragen rund um Ihre Gesundheit stellen und er wird Ihnen mit Rat und Tat zur Seite stehen.'
            },
            {
                'Was ist Quivis?': 'Quivis ist eine Plattform, um deine Gesundheitsdaten zu speichern und zu verwalten. Mit Quivis kannst du deine medizinische Historie in das Sprachmodell Claude einlesen und als ergänzenden Ideengeber verwenden, um dein Verständnis zu vertiefen und deine Gesprächsgrundlage mit Ärzten zu erweitern.',
                'Wie funktioniert Quivis?': 'Quivis ist eine webbasierte Plattform. Um Quivis nutzen zu können, kannst du dir einen Account erstellen und dich anschließend über die Loginseite einloggen. Nach dem Einloggen kannst du Medikationspläne per Foto einlesen, deine Medizinische Historie erfassen und mit dem Sprachmodell Claude chatten.'
            },
        ]
    };

    

    changeItem(i: number) {
        this.activeIndex = i;
    }
}
