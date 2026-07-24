// src/data/gallery.js
import churnTrend from '../images/churn-monthly-trend.png';
import churnByPlan from '../images/churn-rate-by-plan.png';
import correlationMatrix from '../images/correlation-matrix.png';
import churnIntensity from '../images/churn-intensity-heatmap.png';
import netflixDashboard from '../images/netflix-dashboard.png';
import downtimePerFactory from '../images/downtime-per-factory.png';
import downtimeByDevice from '../images/downtime-by-device.png';
import downtimeDashboard from '../images/downtime-dashboard.png';

export const chartGallery = [
  { id: 1, src: churnTrend, caption: 'Monthly churn trend — matplotlib' },
  { id: 2, src: churnByPlan, caption: 'Churn rate by plan type — seaborn' },
  { id: 3, src: correlationMatrix, caption: 'Numerical features correlation matrix' },
  { id: 4, src: churnIntensity, caption: 'Churn intensity by plan & signup type' },
  { id: 5, src: netflixDashboard, caption: 'Netflix catalog explorer — Tableau' },
  { id: 6, src: downtimePerFactory, caption: 'Downtime per factory — Tableau' },
  { id: 7, src: downtimeByDevice, caption: 'Downtime by device type — Tableau' },
  { id: 8, src: downtimeDashboard, caption: 'Factory downtime dashboard — Tableau' },
];