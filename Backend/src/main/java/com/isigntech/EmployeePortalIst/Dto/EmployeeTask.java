package com.isigntech.EmployeePortalIst.Dto;

import java.util.Arrays;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.Lob;
import jakarta.persistence.ManyToOne;

@Entity
@JsonIgnoreProperties(ignoreUnknown = true)
public class EmployeeTask {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int taskId;
	private String additionalMessage;
	private String conditionalMessage;
	@Lob
	private byte[] fileContent;
	
	

	public int getTaskId() { 
		return taskId;
	}

	public void setTaskId(int taskId) {
		this.taskId = taskId;
	}

	public String getAdditionalMessage() {
		return additionalMessage;
	}

	public void setAdditionalMessage(String additionalMessage) {
		this.additionalMessage = additionalMessage;
	}

	public String getConditionalMessage() {
		return conditionalMessage;
	}

	public void setConditionalMessage(String conditionalMessage) {
		this.conditionalMessage = conditionalMessage;
	}

	public byte[] getFileContent() {
		return fileContent;
	}

	public void setFileContent(byte[] fileContent) {
		this.fileContent = fileContent;
	}
	
	
	public EmployeeTask(int taskId, String additionalMessage, String conditionalMessage, byte[] fileContent) {
		super();
		this.taskId = taskId;
		this.additionalMessage = additionalMessage;
		this.conditionalMessage = conditionalMessage;
		this.fileContent = fileContent;
	}

	public EmployeeTask() {
		
	}

	@Override
	public String toString() {
		return "EmployeeTask [taskId=" + taskId + ", additionalMessage=" + additionalMessage + ", conditionalMessage="
				+ conditionalMessage + ", fileContent=" + Arrays.toString(fileContent) + "]";
	}

	
	
	
}
