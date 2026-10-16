# 🍔 Swiggy Real-Time Sales Data Analysis (Python)

![Project Status](https://shields.io)
![Tech](https://shields.io)

## 📌 Project Overview
This repository contains a **Real-Time Exploratory Data Analysis (EDA) Project** focused on analyzing food order logs from **Swiggy**, India's premier food delivery platform. Processing a transactional dataset of **197,430 rows** across 10 operational columns, this project dissects consumer behaviors, regional food demands, and time-series sales trends using advanced data manipulation and visualization frameworks in Python.

The goal of this analysis is to decode commercial granularity (from state to individual restaurant details) and deliver programmatic insights back to the platform's optimization teams.

---

## 📊 Core Data Visualizations
*Key programmatic insights extracted using Plotly Express and Matplotlib:*

### 1. Monthly Revenue & Performance Trend
![Monthly Sales Trend](Visualizations/Monthly_Sales_Trend.png)

### 2. Cuisine Segment Share (Veg vs. Non-Veg)
![Food Type Share](Visualizations/Food_Type_Distribution.png)

---

## 🛠️ Tech Stack & Libraries Demonstrated
- **Data Engineering & Analysis:** Utilized **Pandas** for structuring data frames, metadata validation, and cross-checking historical time-series bounds.
- **Complex Text Processing:** Deployed **NumPy's conditional where logic** combined with automated string lowercase conversions and pipe filters to isolate cuisine types from chaotic text fields.
- **Data Optimization:** Engineered **Reindexing and GroupBy loops** to structurally normalize time blocks dynamically spanning from weekdays into comprehensive quarterly tables.
- **Visual Engineering:** Leveraged **Plotly Express** and **Matplotlib (PyPlot)** to generate interactive corporate charts embedded with smart hover labels and custom tight layouts.

---

## 📈 Key Technical Metrics & Project KPIs
The data pipeline processes and outputs the following foundational key counters:
- **Total Operational Sales:** Overall financial throughput grossed by food orders across the dataset.
- **Ecosystem Average Rating:** High-level mathematical mean tracking general customer satisfaction across partners.
- **Average Order Value (AOV):** Consolidated average basket size per transaction instance.
- **Total Reviews Recorded:** Summation of total ratings counts submitted by platform end-users.
- **Absolute Volume Count:** Direct calculation of total successful food orders registered.

---

## 💡 Core Business Insights & Data Solutions

### 1. Advanced Cuisine Categorization via NLP Modeling
- **Business Problem:** The raw database completely lacked a dedicated "Food Type" column, making it impossible to separate vegetarian and non-vegetarian food preferences natively.
- **Data Solution:** Engineered a custom text scraper parsing multi-line dish names for critical non-veg keywords (e.g., chicken, egg, prawns, mutton). Any missing hit dynamically defaulted as vegetarian.
- **Actionable Insight:** The resulting donut split exposed that **Vegetarian selections account for ~63% of Swiggy's orders**, while Non-Vegetarian items occupy ~37%. This establishes a clear mandate to prioritize vegetarian inventory optimization.

### 2. Regional Scaling & IT Hub Dominance Tracking
- **Business Problem:** Identifying spatial constraints across cities to determine exactly where user spending concentrates heavily.
- **Data Solution:** Grouped sales data stateside and executed a strict descending sequence mapping regional revenue contributions.
- **Actionable Insight:** Analysis confirmed massive revenue density within **Karnataka**, followed by Uttar Pradesh, Telangana, and Maharashtra. High-concentration urban clusters and tech corridors directly correlate with maximum order volumes, offering target locations for localized corporate deals.

---

## 📂 Repository Contents
- `/Jupyter_Notebook`: Contains the `.ipynb` source notebook documenting the step-by-step ETL and EDA pipeline.
- `/Dataset`: Source excel data sheets housing records for users and live transactional timelines.
- `/Visualizations`: Static exports of dynamic plots detailing sales curves and horizontal bar scales.

---
💬 **Feedback & Contributions:** If you have questions about the text pattern masks or want to add predictive forecasting to this notebook, open an issue or link up with me on LinkedIn!
