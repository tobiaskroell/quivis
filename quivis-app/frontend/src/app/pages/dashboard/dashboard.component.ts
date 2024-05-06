import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { Subscription, debounceTime } from 'rxjs';
import { LayoutService } from 'src/app/layout/services/app.layout.service';
import { AppConfig } from 'src/app/layout/services/app.layout.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnInit {

  ordersChart: any;
  ordersOptions: any;
  activeOrders = 0;
  trafficChart: any;
  trafficOptions: any;
  activeTraffic = 0;
  goalChart: any;
  goalOptions: any;
  items: any[] = [];
  val1 = 1;
  val2 = 2;
  orderWeek: any;
  selectedOrderWeek: any;
  products: any[] = [];
  productsThisWeek: any[] = [];
  productsLastWeek: any[] = [];
  config: AppConfig | undefined;
  subscription: Subscription | undefined;

  constructor(
    public layoutService: LayoutService,
    private productService: ProductService
  ) {
    this.subscription = this.layoutService.configUpdate$
      .pipe(debounceTime(25))
      .subscribe((config) => {
        this.initCharts();
      });
  }

  ngOnInit() {
    this.productService
      .getProducts()
      .then((data) => (this.products = data));
    this.productService
      .getProducts()
      .then((data) => (this.productsThisWeek = data));
    this.productService
      .getProductsMixed()
      .then((data) => (this.productsLastWeek = data));

    this.items = [
      { label: 'View Profile', icon: 'pi pi-user' },
      { label: 'Update Profile', icon: 'pi pi-refresh' },
      { label: 'Delete Profile', icon: 'pi pi-trash' },
    ];

    this.orderWeek = [
      { name: 'This Week', code: '0' },
      { name: 'Last Week', code: '1' },
    ];
    this.selectedOrderWeek = this.orderWeek[0];
    this.initCharts();
  }
  initCharts() {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');
    const textColorSecondary = documentStyle.getPropertyValue(
      '--text-color-secondary'
    );
    const surfaceBorder =
      documentStyle.getPropertyValue('--surface-border');

    this.trafficChart = {
      labels: ['Add View', 'Total View'],
      datasets: [
        {
          data: [48, 52],
          backgroundColor: [
            getComputedStyle(document.body).getPropertyValue(
              '--primary-dark-color'
            ) || '#2c84d8',
            getComputedStyle(document.body).getPropertyValue(
              '--content-alt-bg-color'
            ) || '#B1B9C9',
          ],
          borderWidth: 0,
        },
      ],
    };
    this.ordersChart = {
      labels: [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
      ],
      datasets: [
        {
          label: 'Revenue',
          data: [31, 83, 69, 29, 62, 25, 59, 26, 46],
          borderColor: ['#f1b263'],
          backgroundColor: ['rgba(241, 178, 99, 0.1)'],
          borderWidth: 2,
          fill: true,
          borderDash: [3, 6],
          tension: 0.4,
        },
        {
          label: 'Cost',
          data: [67, 98, 27, 88, 38, 3, 22, 60, 56],
          borderColor: ['#2f8ee5'],
          backgroundColor: ['rgba(47, 142, 229, 0.05)'],
          borderWidth: 2,
          fill: true,
          pointRadius: 3,
          tension: 0.4,
        },
      ],
      responsive: true,
    };

    this.trafficOptions = {
      plugins: {
        legend: {
          display: false,
        },
      },
      responsive: true,
      cutout: '80%',
    };

    this.goalChart = {
      labels: ['Complete', 'Not Complete', 'Extra Tasks'],
      datasets: [
        {
          data: [183, 62, 10],
          backgroundColor: [
            '#ffffff',
            'rgba(255,255,255,.2)',
            'rgba(255,255,255,.5)',
          ],
          borderWidth: 0,
        },
      ],
    };

    this.goalOptions = {
      plugins: {
        legend: {
          display: false,
        },
      },
      responsive: true,
    };

    this.ordersOptions = {
      animation: {
        duration: 0,
      },
      plugins: {
        legend: {
          labels: {
            color: textColor,
          },
        },
        tooltip: {
          callbacks: {
            label: function (context: any) {
              let label = context.dataset.label || '';

              if (label) {
                label += ': ';
              }

              if (context.parsed.y !== null) {
                label += new Intl.NumberFormat('en-US', {
                  style: 'currency',
                  currency: 'USD',
                }).format(context.parsed.y);
              }
              return label;
            },
          },
        },
      },
      scales: {
        x: {
          ticks: {
            color: textColorSecondary,
          },
          grid: {
            color: surfaceBorder,
          },
        },
        y: {
          ticks: {
            color: textColorSecondary,
          },
          grid: {
            color: surfaceBorder,
          },
        },
      },
    };
  }
  changeDataset(event: any) {
    const dataSet = [
      [31, 83, 69, 29, 62, 25, 59, 26, 46],
      [40, 29, 7, 73, 81, 69, 46, 21, 96],
    ];
    const dataSet2 = [
      [67, 98, 27, 88, 38, 3, 22, 60, 56],
      [74, 67, 11, 36, 100, 49, 34, 56, 45],
    ];

    this.activeOrders = parseInt(
      event.currentTarget.getAttribute('data-index')
    );

    this.ordersChart.datasets[0].data =
      dataSet[parseInt(event.currentTarget.getAttribute('data-index'))];
    this.ordersChart.datasets[1].data =
      dataSet2[parseInt(event.currentTarget.getAttribute('data-index'))];
    this.ordersChart.datasets[0].label =
      event.currentTarget.getAttribute('data-label');
    this.ordersChart.datasets[0].borderColor =
      event.currentTarget.getAttribute('data-stroke');
  }
  changeTrafficset(event: any) {
    const traffidDataSet = [
      [48, 52],
      [26, 74],
      [12, 88],
    ];
    this.activeTraffic = parseInt(
      event.currentTarget.getAttribute('data-index')
    );

    this.trafficChart.datasets[0].data =
      traffidDataSet[
      parseInt(event.currentTarget.getAttribute('data-index'))
      ];
  }
  recentSales(event: any) {
    if (event.value.code === '0') {
      this.products = this.productsThisWeek;
    } else {
      this.products = this.productsLastWeek;
    }
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
