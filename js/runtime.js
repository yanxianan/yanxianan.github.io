// ����ʱ���������
window.onload = function() {
  // ��ȡҳ�����ʱ��
  let startTime = window.performance.timing.navigationStart; // ҳ����ؿ�ʼʱ��
  let endTime = new Date().getTime(); // ��ǰʱ��
  let timeDiff = endTime - startTime; // ����ʱ���

  // ��ʽ������ʱ������λ���룩
  let seconds = Math.floor(timeDiff / 1000);
  let minutes = Math.floor(seconds / 60);
  let hours = Math.floor(minutes / 60);
  let days = Math.floor(hours / 24);
  let formattedTime = days + " �� " + hours % 24 + " Сʱ " + minutes % 60 + " ����";

  // ��ȡҳ��ײ�Ԫ�ز���������ʱ��
  let footer = document.querySelector('footer');
  if (footer) {
    let runTimeElement = document.createElement('div');
    runTimeElement.className = 'runtime';
    runTimeElement.innerHTML = '��վ����ʱ����' + formattedTime;
    footer.appendChild(runTimeElement);
  }
}
