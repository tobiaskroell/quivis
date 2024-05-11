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
                'Dashboard': 'Das Dashboard ist die Startseite von Quivis. Hier findest du alle wichtigen Informationen auf einen Blick. Navigiere zu den einzelnen Modulen, um deine Gesundheitsdaten zu verwalten.',
                'Medizinische Historie': 'In der Medizinischen Historie kannst du alle deine Arztbesuche, Diagnosen und Behandlungen eintragen. So hast du alle wichtigen Informationen immer griffbereit.',
                'Medikationsplan': 'Im Medikationsplan kannst du alle deine Medikamente eintragen. Nutze dafür einfach die Upload-Funktion, um ein Foto deines Medikamentenplans hochzuladen. Dieser wird dann automatisch in den Medikationsplan übertragen, sodass du diesen auch an Claude weitergeben kannst.',
                'Frag Claude': 'Frag Claude ist eine Möglichkeit, deine Gesundheitsdaten an das KI-Sprachmodell Claude zu Übertragen. Basierend auf deinen Daten kannst du Claude zu Diagnosen, Medikationen o.Ä. befragen. Claude wird dir dann eine Antwort geben, die auf deinen Daten basiert.'
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
