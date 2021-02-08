package org.formation;

import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Pattern;
import javax.validation.constraints.Pattern.Flag;

import org.hibernate.validator.constraints.Range;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.stereotype.Component;
import org.springframework.validation.annotation.Validated;

@Component
@ConfigurationProperties("hello")
@Validated
public class HelloProperties {

	/**
	 * La façon de dire bonjour.
	 */
	@NotEmpty
	private String greeting;
	@Pattern(regexp = "uppercase|lowercase|camelcase", flags = Flag.CASE_INSENSITIVE)
	private String styleCase;
	
	private CaseEnum style;
	
	@Range(min = 0, max = 1)
	private int position;

	public String getGreeting() {
		return greeting;
	}

	public void setGreeting(String greeting) {
		this.greeting = greeting;
	}

	public String getStyleCase() {
		return styleCase;
	}

	public void setStyleCase(String styleCase) {
		this.styleCase = styleCase;
	}

	public CaseEnum getStyle() {
		return style;
	}

	public void setStyle(CaseEnum style) {
		this.style = style;
	}

	public int getPosition() {
		return position;
	}

	public void setPosition(int position) {
		this.position = position;
	}
	
	
}
