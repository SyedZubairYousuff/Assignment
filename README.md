# **Time Series Anomaly Detection for IoT Sensors**


### **Project Overview**



This project implements an end-to-end anomaly detection pipeline for IoT sensor data, specifically CPU utilization readings from an AWS EC2 instance.

The goal is to identify unusual patterns that may indicate system malfunctions or performance degradation.

Two approaches were explored:

* **Isolation Forest** **(Unsupervised Statistical Model)**
* **LSTM Autoencoder (Deep Learning Model)**

Both models were compared using evaluation metrics and visualizations.



### **Dataset:**

* **Source:** Numenta Anomaly Benchmark (NAB)
* **File Used:** ec2\_cpu\_utilization\_5f5533.csv
* **Description:** Univariate time-series of CPU utilization (%) recorded from an AWS EC2 instance.





### **Requirements:**

**Library			  Version (recommended)**

Python				          3.9+

pandas				          2.0+

numpy				            1.24+

matplotlib			        3.7+

seaborn				          0.12+

scikit-learn			      1.3+

tensorflow			        2.13+



### **How to Run**

1. **Jupyter Notebook**

Open the notebook: 

**jupyter notebook notebooks/Model.ipynb**



**2. Run all cells sequentially:**



* Data Preprocessing
* EDA and Outlier Detection
* Feature Engineering
* **Model 1:** Isolation Forest
* **Model 2:** LSTM Autoencoder
* Evaluation and Comparison



## **Output and Results**



**Visualizations:**

* Time series plots with detected anomalies
* Boxplots and distribution plots
* Confusion matrices and ROC curves



### **Key Outputs:**

* df\_results → Isolation Forest predictions
* df\_lstm → LSTM Autoencoder predictions
* Report.docx → Detailed project report







## **Key Insights**

* Isolation Forest detects sharp anomalies with high precision.
* LSTM Autoencoder captures broader anomaly sequences with higher recall.
* Combining both methods can yield a balanced IoT anomaly detection framework.





## **Future Enhancements**



* Integrate NAB label files for ground-truth comparison.
* Use adaptive thresholds instead of fixed percentiles.
* Extend to multivariate datasets (temperature, vibration, pressure).
* Deploy the trained model as an API for live anomaly monitoring.



## **Author**



**Syed Zubair Yousuff**

**AI/ML Engineer (Fresher Assignment)**

**yousufzubair018@gmail.com**

